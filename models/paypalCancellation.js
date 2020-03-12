const CronJob = require("cron").CronJob;
const axios = require("axios");
const DatabankUsers = require("../models/databankUsers");
const { formatDate } = require("../graphQL/resolvers");

const job = new CronJob(
  // every 24 hours
  "0 */24 * * *",
  //   "13 * * * *",
  async function() {
    console.log("You will see this message every 24 hours");
    const nextBillngDatesForCancelledSubs = (await DatabankUsers.findAll())
      // When the user cancels their subscription through our app, we set thte p_next_billing_time field
      // to their next tbilling date. If this field is null, it means that the user hasn't cancelled their subsription.
      .filter(user => user.p_next_billing_time !== null)
      .map(user => formatDate(user.p_next_billing_time));

    let todaysDate = formatDate(new Date());

    nextBillngDatesForCancelledSubs.forEach(function changeUsersTiersToFree(
      billingDate
    ) {
      if (billingDate === todaysDate) {
        console.log("nextBillingDate === todaysDate");
        theUser.tier = "FREE";
        theUser.subscription_id = "cancelled";
        ctx.Users.updateById(id, theUser)
          .then(() => console.log("UPDATED USER SUCCESSFULLY"))
          .catch(err => console.error("ERROR UPDATING THE USER", err));
      }
    });
  },
  null,
  true,
  "America/Los_Angeles"
);
job.start();

// Helpers
function formatDate(date) {
  return new Date(date).toDateString();
}
