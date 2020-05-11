//when new ones are add, mo, qtr, year are not on them
const removeMultiples = require("./removeMultiples")
module.exports = function separateMultiples(parsedArray) {
    // console.log("parcedArray", parsedArray[0]);

    newData = []
    const testArray = parsedArray.splice(0,5)
    newData.push(testArray)

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
                unique.shift();
                // console.log("unique", unique)
                if (unique.length) {
                    let length = unique.length
                    for (i=0; i < length; i++) {
                        // console.log(propName)
                        // console.log(unique[i])
                        let object = {
                            platform_sessions_id: obj.platform_sessions_id,
                            cell_num: obj.cell_num,
                            procedurecommodity: undefined,
                            procedurecommoditycat: undefined,
                            proceduredest: undefined,
                            procedurerequireddocument: undefined,
                            procedurerelevantagency: undefined,
                            procedureorigin: undefined,
                            commoditycountry: undefined,
                            commoditymarket: undefined,
                            commoditycat: undefined,
                            commodityproduct: undefined,
                            exchangedirection: undefined,
                            created_date: obj.created_date
                        }
                        object[propName] = unique[i];
                    
                        let newObj = new Object(object)
                        // newObj.object[i] = str
                        // console.log(newObj)
                        newData.push(newObj)
                    }
                }
            } 
        });
    })
    console.log(newData)
    // removeMultiples(newData)
  }