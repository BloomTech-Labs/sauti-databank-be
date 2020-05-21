describe("creates arrays with new objects that are the correct size and shape for each search in a session", () => {
  const seperateMultiples = require("../seperateMultiples");
  beforeEach(() => {
    jest.resetModules();
  });
  afterEach(() => {
    jest.resetModules();
  });
  test(`returns an array`, () => {
    const mockData = require("./testDummyData");
    expect(Array.isArray(seperateMultiples(mockData))).toBe(true);
  });
  test(`array is full of objects`, () => {
    const mockData = require("./testDummyData");
    for (var i = 0; i < mockData.length; i++) {
      expect(typeof seperateMultiples(mockData)[i]).toEqual("object");
    }
  });
  test(`objects are the correct length`, () => {
    const mockData = require("./testDummyData");
    for (var i = 0; i < mockData.length; i++) {
      expect(Object.keys(seperateMultiples(mockData)[i]).length).toEqual(14);
    }
  });
  test(`creates new objects for each search in a session`, () => {
    const mockData = require("./testDummyData");
    let count = 0;
    for (var i = 0; i < mockData.length; i++) {
      Object.entries(mockData[i]).forEach(entry => {
        if (typeof entry[1] === "string" && entry[1].includes(",")) {
            count = count + entry[1].match(/a/gi).length;
        }
      });
    }
    expect(mockData.length + count).toEqual(seperateMultiples(mockData).length);
  });
});
describe("all new objects have undefined for thier properties excluding the new entry from the additional search", () => {
  const seperateMultiples = require("../seperateMultiples");
  beforeEach(() => {
    jest.resetModules();
  });
  afterEach(() => {
    jest.resetModules();
  });
  test(`new object session id is a number`, () => {
    const mockData = require("./testDummyData");
    let count = 0;
    for (var i = 0; i < mockData.length; i++) {
      Object.entries(mockData[i]).forEach(entry => {
        if (typeof entry[1] === "string" && entry[1].includes(",")) {
            count = count + entry[1].match(/a/gi).length;
        }
      });
    }
    let newObjNum = seperateMultiples(mockData).length - count;
    for (var j = newObjNum; j < seperateMultiples(mockData).length; j++) {
      Object.entries(seperateMultiples(mockData)[j]).forEach(entry => {
        if (entry[0] === "platform_sessions_id") {
          expect(typeof entry[1]).toEqual("number");
        }
      });
    }
  });
  test(`new object cell number is a string`, () => {
    const mockData = require("./testDummyData");
    let count = 0;
    for (var i = 0; i < mockData.length; i++) {
      Object.entries(mockData[i]).forEach(entry => {
        if (typeof entry[1] === "string" && entry[1].includes(",")) {
            count = count + entry[1].match(/a/gi).length;
        }
      });
    }
    let newObjNum = seperateMultiples(mockData).length - count;
    for (var j = newObjNum; j < seperateMultiples(mockData).length; j++) {
      Object.entries(seperateMultiples(mockData)[j]).forEach(entry => {
        if (entry[0] === "cell_num") {
          expect(typeof entry[1]).toEqual("string");
        }
      });
    }
  });
  test(`new object created date is a string`, () => {
    const mockData = require("./testDummyData");
    let count = 0;
    for (var i = 0; i < mockData.length; i++) {
      Object.entries(mockData[i]).forEach(entry => {
        if (typeof entry[1] === "string" && entry[1].includes(",")) {
            count = count + entry[1].match(/a/gi).length;
        }
      });
    }
    let newObjNum = seperateMultiples(mockData).length - count;
    for (var j = newObjNum; j < seperateMultiples(mockData).length; j++) {
      Object.entries(seperateMultiples(mockData)[j]).forEach(entry => {
        if (entry[0] === "created_date") {
          expect(typeof entry[1]).toEqual("string");
        }
      });
    }
  });
  test(`new object contains a number and three strings with all other fields undefined`, () => {
    const mockData = require("./testDummyData");
    let count = 0;
    for (var i = 0; i < mockData.length; i++) {
      Object.entries(mockData[i]).forEach(entry => {
        if (typeof entry[1] === "string" && entry[1].includes(",")) {
            count = count + entry[1].match(/a/gi).length;
        }
      });
    }
    let newObjNum = seperateMultiples(mockData).length - count + 1;
    for (var j = newObjNum; j < seperateMultiples(mockData).length; j++) {
      let countOfNumbers = 0;
      let countOfStrings = 0;
      let countUndefined = 0;
      Object.entries(seperateMultiples(mockData)[j]).forEach(entry => {
        if (typeof entry[1] === "number") {
          ++countOfNumbers;
        }
        if (typeof entry[1] === "string") {
          ++countOfStrings;
        }
        if (typeof entry[1] === "undefined") {
          ++countUndefined;
        }
      });
      expect(countOfStrings).toEqual(3);
      expect(countUndefined).toEqual(10);
      expect(countOfNumbers).toEqual(1);
    }
  });
});

describe("duplicate tests", () => {
  const seperateMultiples = require("../seperateMultiples");
  //USE THIS IF YOU ARE GOING TO USE "require('./testDummyData')" more than once
  // beforeEach(() => {
  //   jest.resetModules();
  // });
  test("Array has an extra property value, removes extra value and gives it its own object (length+1) ", async () => {
    const testData1 = require("./testDummyData");
    /*
        The function will run, takes in "testData1" array as an arguement, 
        and returns the new array without multiple values per property.
        This test will be validatng this by checking the lengths 
        of data before and after(theReturned) .
        */
    //this is the returned values length
    const before = Array.from(testData1);
    // console.log("length of array before function", testData1.length); //8
    const theReturnedValue = seperateMultiples(Array.from(testData1));
    // console.log("length of array after function", theReturnedValue.length); //6
    // this is the length of the array before the function is used
    // console.log("before and after", before.length, theReturnedValue.length);
    expect(theReturnedValue.length).toBeGreaterThan(before.length);
    // expect(theReturnedValue.length).toBeLessThan(new Array(testData1)[0].length)
  });
  test("function does nothing when array has no duplicated data is sent to it", async () => {
    /*
        The function will run, takes in "noDupes" array as an arguement, 
        and returns a new array with the same values per property the 
        function does not run through the loops to remove dupplicates
         because they're are none.
        */
    const noDupes = [
      {
        platform_sessions_id: 45773,
        cell_num: "250000045773",
        procedurecommodity: undefined,
        procedurecommoditycat: undefined,
        proceduredest: undefined,
        procedurerequireddocument: undefined,
        procedurerelevantagency: undefined,
        procedureorigin: undefined,
        commoditycountry: "RWA",
        commoditymarket: undefined,
        commoditycat: undefined,
        commodityproduct: undefined,
        exchangedirection: undefined,
        created_date: "2020-04-24T17:31:40.000Z"
      }
    ];
    /*Here I'll save it
        in a variable as a string to match it to the its self using RegExp methods.*/
    const theReturnedValue = JSON.stringify(
      seperateMultiples(Array.from(noDupes))
    );
    /* Here I am using "toMatch"(a RegExp testing method)
           to confirm the array is still the same as before*/
    expect(theReturnedValue).toMatch(JSON.stringify(Array.from(noDupes)));
  });
});
