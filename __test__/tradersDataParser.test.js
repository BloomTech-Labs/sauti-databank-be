test("getTraders() returns an array of traders' data", () => {
  // import dependencies
  const storedTradersData = require("../tmp/traders.json");
  const Traders = require("../models/model");
  // arrange
  const allTraders = Traders.getTraders();
  // assert
  expect(allTraders).resolves.toEqual(storedTradersData);
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

  test("objMap() should work the same as Array.prototype.map, but applied to an object", () => {
    // import dependency
    const { objMap } = require("../models/tradersDataParser");
    // arrange
    const numbers = { a: 1, b: 2, c: 3 };
    const expected = { a: "1", b: "2", c: "3" };
    const stringify = val => String(val);
    // act
    const stringifiedNumbers = objMap(stringify, numbers);
    // assert
    expect(stringifiedNumbers).toEqual(expected);
  });
});
