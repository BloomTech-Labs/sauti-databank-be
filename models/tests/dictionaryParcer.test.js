const dictionaryParcer = require("../dictionaryParcer");
const mockData = require("./testDummyData");


it('should remove "market" from the commodity markets prop in the first object', () => {
    expect(mockData[0].commoditymarket).toBe("Nairobi Market")

    const expected = dictionaryParcer(mockData)
    for (var i = 0; i < expected.length; i++) {
        expect(expected[i].commoditymarket).not.toMatch(/market/i)
    }

})

// console.log(mockData)

it('mockData[2] object should change from "farm input" to farm inputs', () => {
    // expect(mockData[2].procedurecommoditycat).toBe(/animal product/)
    // const expected = dictionaryParcer(mockData)
    // expect(expected[2].procedurecommoditycat).toBe(/Animal Products/)

})

it.todo('mockData[2] object should change ANIMAL PRODUCT and Pawpaws to be reformatted')
