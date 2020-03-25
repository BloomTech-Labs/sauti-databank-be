const CronJob = require("cron").CronJob;
const axios = require("axios");
const DatabankUsers = require("../models/databankUsers");
const qs = require("qs");

// This cron job checks all users that have deleted their subscriptions.
// If thier subscription period is equal to the current date, this cron job will revert their account back to free.
const job = new CronJob(
  // every 24 hours
  // "0 */24 * * *",
  "0 * * * *",
  async function() {
    console.log("This cron job will run every 24 hours.");
    // When the user cancels their subscription through our app, we set thte p_next_billing_time field
    // to their next billing date. If this field is null, it means that the user hasn't cancelled their subsription.
    const cancelledSubs = (await DatabankUsers.findAll())
      .filter(user => user.p_next_billing_time !== null)
      .map(user => {
        return {
          ...user,
          p_next_billing_time: formatDate(user.p_next_billing_time)
        };
      });

    console.log("cancelled subs", cancelledSubs.length);
    let todaysDateFormatted = formatDate(new Date());

    cancelledSubs.forEach(async function changeUsersTiersToFree(subscriber) {
      const {
        access_token,
        config: authCreds
      } = await catchErrors(getAccessTokenAndAuthCreds(), err =>
        console.error("error retrieving the access token and auth creds:", err)
      );

      const {
        data: {
          billing_info: { next_billing_time }
        }
      } = await catchErrors(
        axios.get(
          `https://api.sandbox.paypal.com/v1/billing/subscriptions/${subscriber.subscription_id}`
        ),
        err =>
          console.error("error retrieving thte user's subscription info:", err)
      );

      console.log("next_billing_time", formatDate(next_billing_time));

      if (subscriber.p_next_billing_time === todaysDateFormatted) {
        // Cancel the users' subscriptions
        await catchErrors(
          axios.post(
            `https://api.sandbox.paypal.com/v1/billing/subscriptions/${subscriber.subscription_id}/cancel`,
            authCreds
          ),
          err => console.error("Error cancelling the subscription", err)
        );
        subscriber.tier = "FREE";
        subscriber.subscription_id = "cancelled";
        subscriber.p_next_billing_time = null;
        DatabankUsers.updateById(subscriber.id, subscriber)
          .then(() => console.log("updated user successfully"))
          .catch(err => console.error("error updating the user", err));
      }
    });
  },
  null,
  true,
  "America/Los_Angeles"
);
job.start();

/**
 *  Helpers
 *  */

function formatDate(date) {
  return new Date(date).toDateString();
}

async function getAccessTokenAndAuthCreds() {
  const url = "https://api.sandbox.paypal.com/v1/oauth2/token";

  const oldData = {
    grant_type: "client_credentials"
  };

  const auth = {
    username: `${process.env.PAYPAL_AUTH_USERNAME}`,
    password: `${process.env.PAYPAL_AUTH_SECRET}`
  };

  const options = {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Credentials": true
    },
    data: qs.stringify(oldData),
    auth: auth,
    url
  };
  const {
    data: { access_token }
  } = await axios(options);
  axios.defaults.headers.common = {
    Authorization: `Bearer ${access_token}`
  };
  const config = {
    headers: { Authorization: `Bearer ${access_token}` }
  };

  return { config, access_token };
}

function catchErrors(promise, errorHandler = console.error) {
  return promise.then(data => data).catch(err => errorHandler(err));
}
