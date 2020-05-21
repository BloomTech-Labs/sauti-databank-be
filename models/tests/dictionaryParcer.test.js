const dictionaryParcer = require("../dictionaryParcer");
const mockData = require("./testDummyData");

afterEach(() => {
  expected = null;
});

describe("Data normalization is adjust the data properly", () => {
  it('should remove "market" from the commodity markets prop in the first object', () => {
    expect(mockData[0].commoditymarket).toBe("Nairobi Market");
    // console.log(mockData)

    const expected = dictionaryParcer(mockData);

    for (var i = 0; i < expected.length; i++) {
      expect(expected[i].commoditymarket).not.toMatch(/market/i);
    }
  });
});

// console.log(mockData)

//RESEARCH HOW TO CLEAR/TEAR DOWN MOCKS BETWEEN TEST RUNS

it('mockData[2] object should change from "farm input" to farm inputs', () => {
  console.log(mockData);
  // expect(mockData[2].procedurecommoditycat).toBe(/animal product/)
  // const expected = dictionaryParcer(mockData)
  // expect(expected[2].procedurecommoditycat).toBe(/Animal Products/)
});

it.todo(
  "mockData[2] object should change ANIMAL PRODUCT and Pawpaws to be reformatted"
);
