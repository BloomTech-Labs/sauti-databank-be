test("getTraders() returns an array of traders' data", () => {
  // import dependencies
  const storedTradersData = require("../tmp/traders.json");
  const Traders = require("../models/model");

  const traders = Traders.getTraders().then(traders => {
    // map over each entry to remove the "Row Data Packet" prefix that was coming from the database.
    return traders.map(trader => ({ ...trader }));
  });
  expect(traders).resolves.toEqual(storedTradersData);
});

describe("helpers", () => {
  test("removeDuplicates() removes duplicate indexes in an array", () => {
    // import dependency
    const { removeDuplicates } = require("../models/tradersDataParser");
    //arange
    const arrayWithDuplicates = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5];
    // act
    const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
    // assert
    expect(arrayWithoutDuplicates).toEqual([1, 2, 3, 4, 5]);
  });
});
