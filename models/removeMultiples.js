module.exports = function removeMultiples(newData) {
    // console.log("parcedArray", parsedArray[0]);

    newNewData = []
    const testArray = newData.splice(0,5)
    newNewData.push(testArray)

    testArray.map(obj => {
        // console.log("object", obj)

        Object.entries(obj).forEach(entry => {
            // console.log("entry", entry)
            if (entry[1], typeof(entry[1]) === "string" && entry[1].includes(",")) {
            // console.log("multiple entries", entry[1])
            let propName = entry[0]
            // console.log("propName", propName)
            let split = entry[1].split(",");
            let unique = [...new Set(split)];
                console.log("unique", unique)
            } 
        });
    })
  }