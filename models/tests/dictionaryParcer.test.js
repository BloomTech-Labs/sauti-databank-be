describe("Data normalization is adjust the data properly", () => {
  const mockData = require("./testDummyData");
  const dictionaryParcer = require("../dictionaryParcer");

  beforeEach(() => {
    jest.resetModules();
  });

  it('should remove "market" from the commodity markets prop in the first object', () => {
    expect(mockData[0].commoditymarket).toBe("Nairobi Market");
    // console.log(mockData)

    const expected = dictionaryParcer(mockData);

    for (var i = 0; i < expected.length; i++) {
      expect(expected[i].commoditymarket).not.toMatch(/market/i);
    }
  });

  it("Object 1 should be properly formatted from the dictionaryParser", () => {
    const mockData2 = require("./testDummyData");

    expect(mockData2[1].procedurecommoditycat).toBe("clothing & shoes");

    const expected1 = dictionaryParcer(mockData2);
    expect(expected1[1].procedurecommoditycat).toBe("Clothing & Shoes");
  });

  it('mockData object should change from "farm input" to farm inputs', () => {
    const mockData4 = require("./testDummyData");

    expect(mockData4[2].procedurecommoditycat).toBe("ANIMAL PRODUCT");

    const expected2 = dictionaryParcer(mockData4);
    expect(expected2[2].procedurecommoditycat).toBe("Animal Product");
  });

  it("should reformat MBSA to Mombasa in commoditymarket", () => {
    const newMock = require("./testDummyData");

    expect(newMock[2].commoditymarket).toBe("MBSA");
    const newExpect = dictionaryParcer(newMock);
    expect(newExpect[2].commoditymarket).toBe("Mombasa");
  });

  it("mockData object should change Pawpaws to be reformatted", () => {
    const mockData3 = require("./testDummyData");

    expect(mockData3[2].procedurecommodity).toBe("Pawpaws(papaya)");
    expect(mockData3[2].commoditycat).toBe("farm input");

    const expected3 = dictionaryParcer(mockData3);
    expect(expected3[2].procedurecommodity).toBe("Papaya");
    expect(expected3[2].commoditycat).toBe("Farm Inputs");
  });

  it("should remove '->' from exchangedirection and proceduredest ", () => {
    const mockData5 = require("./testDummyData");

    expect(mockData5[2].proceduredest).toBe("KEN->UGA");
    expect(mockData5[2].exchangedirection).toBe("KES->UGX");
    const expected5 = dictionaryParcer(mockData5);
    expect(expected5[2].proceduredest).not.toMatch(/->/i);
    expect(expected5[2].exchangedirection).not.toMatch(/->/i);
  });

  it("should return the same number of objects after parsing", () => {
    const mockLength = require("./testDummyData");
    const i = mockLength.length;
    const lengthExpect = dictionaryParcer(mockLength);
    expect(i).toEqual(lengthExpect.length);
  });
});
