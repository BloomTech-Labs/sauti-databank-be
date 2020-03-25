const CronJob = require("cron").CronJob;
const axios = require("axios");
const DatabankUsers = require("../models/databankUsers");
const qs = require("qs");

// This cron job checks all users that have deleted their subscriptions.
// If thier subscription period is equal to the current date, this cron job will revert their account back to free.
const job = new CronJob(
  // every 24 hours
  "0 */24 * * *",
  async function() {
    console.log("This cron job will run every 24 hours.");
    const cancelledSubs = (await DatabankUsers.findAll())
      // When the user cancels their subscription through our app, we set thte p_next_billing_time field
      // to their next billing date. If this field is null, it means that the user hasn't cancelled their subsription.
      .filter(user => user.p_next_billing_time !== null)
      .map(user => {
        return {
          ...user,
          p_next_billing_time: formatDate(user.p_next_billing_time)
        };
      });

    let todaysDateFormatted = formatDate(new Date());

    cancelledSubs.forEach(async function changeUsersTiersToFree(subscriber) {
      if (subscriber.p_next_billing_time === todaysDateFormatted) {
        // Cancel the user's subscription
        try {
          const authCreds = await getAuthCreds();
          await axios.post(
            `https://api.sandbox.paypal.com/v1/billing/subscriptions/${subscriber.subscription_id}/cancel`,
            authCreds
          );
        } catch (err) {
          console.error("Error cancelling the subscription", err);
        }
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

async function getAuthCreds() {
  const url = "https://api.sandbox.paypal.com/v1/oauth2/token";
  const oldData = {
    grant_type: "client_credentials"
  };
  const auth = {
    username: `AeMzQ9LYW7d4_DAzYdeegCYOCdsIDuI0nWfno1vGi4tsKp5VBQq893hDSU6FIn47md30k4jC5QDq33xM`,
    password: `ECeUwnnTkSqjK6NIycSLp8joMLgOpof1rQdA4W8NvHqgKQNuNqwgySgGEJr_fq_JFHtzM6Je9Kj8fClA`
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
  const { data } = await axios(options);
  const { access_token } = data;
  axios.defaults.headers.common = {
    Authorization: `Bearer ${access_token}`
  };
  const config = {
    headers: { Authorization: `Bearer ${access_token}` }
  };

  return config;
}
