const seperateMultiples = require("../seperateMultiples");
const mockData = require("./testDummyData");

test(`creates new objects`, () => {
  let count = 0;
  for (var i = 0; i < mockData.length; i++) {
    Object.entries(mockData[i]).forEach(entry => {
      if (typeof entry[1] === "string" && entry[1].includes(",")) {
        ++count;
      }
    });
  }
  expect(mockData.length + count).toEqual(seperateMultiples(mockData).length);
});
