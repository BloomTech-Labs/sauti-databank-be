const axios = require("axios");
const DatabankUsers = require("../models/databankUsers");
const qs = require("qs");

// This cron job checks all users that have deleted their subscriptions.
// If thier subscription period is equal to the current date, this cron job will revert their account back to free.
const job = async function() {
  console.log("This cron job will run every 4 hours.");
  // When the user cancels their subscription through our app, we set thte p_next_billing_time field
  // to their next billing date. If this field is null, it means that the user hasn't cancelled their subsription.
  const cancelledSubs = (await DatabankUsers.findAll()).filter(
    user => user.p_next_billing_time !== null
  );

  let todaysDateFormatted = formatDate(new Date());
  let tokenCache = null;

  cancelledSubs.forEach(async function updateBillingTimesAndCancelSubscriptions(
    subscriber
  ) {
    // cache the bearer token so that after we get it intitially, we don't have to request it for every account we want to cancel.
    if (tokenCache == null) {
      tokenCache = await getBearerToken();
    }
    // retrieve the next billing time for the subscriber who canelled their account (as it stands, it's set for the same day
    // they cancelled it).
    let {
      data: {
        billing_info: { next_billing_time }
      }
    } = await catchErrors(
      axios.get(
        `https://api.sandbox.paypal.com/v1/billing/subscriptions/${subscriber.subscription_id}`,
        tokenCache
      ),
      err =>
        console.error("error retrieving thte user's subscription info:", err)
    );
    if (formatDate(subscriber.p_next_billing_time) !== todaysDateFormatted) {
      // update the user's next billing time from today to whatever was returned from the GET request for that user.
      // When the user first cancels their account, their next billing time is automatically set to today (the same day they cancelled it).
      // Here, we're setting their next billing time to the actual date that's recorded on Paypal's system.
      subscriber.p_next_billing_time = formatDate(next_billing_time);
      DatabankUsers.updateById(subscriber.id, subscriber);
    } else {
      // If the next billing time is today...
      // Cancel the users' subscriptions
      await catchErrors(
        axios.post(
          `https://api.sandbox.paypal.com/v1/billing/subscriptions/${subscriber.subscription_id}/cancel`,
          tokenCache
        ),
        err => console.error("Error cancelling the subscription", err)
      );
      subscriber.tier = "FREE";
      subscriber.subscription_id = "cancelled";
      subscriber.p_next_billing_time = null;
      DatabankUsers.updateById(subscriber.id, subscriber)
        .then(() => console.log("updated user successfully", subscriber))
        .catch(err => console.error("error updating the user", err));
    }
  });
};

job();

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
  const {
    data: { access_token }
  } = await axios(options);
  axios.defaults.headers.common = {
    Authorization: `Bearer ${access_token}`
  };
  const config = {
    headers: { Authorization: `Bearer ${access_token}` }
  };

  return config;
}

function catchErrors(promise, errorHandler = console.error) {
  return promise.then(data => data).catch(err => errorHandler(err));
}

async function getBearerToken() {
  const authCreds = await catchErrors(getAuthCreds(), err =>
    console.error("error retrieving the access token and auth creds:", err)
  );

  return authCreds;
}
