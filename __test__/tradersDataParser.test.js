const storedTradersData = require("../tmp/traders.json");
const Traders = require("../models/model");

test("getTraders() returns an array of traders' data", () => {
  const traders = Traders.getTraders().then(traders => {
    // map over each entry to remove the "Row Data Packet" prefix that was coming from the database.
    return traders.map(trader => ({ ...trader }));
  });
  expect(traders).resolves.toEqual(storedTradersData);
});
