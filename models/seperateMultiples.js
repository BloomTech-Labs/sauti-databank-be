//when new ones are add, mo, qtr, year are not on them
module.exports = function separateMultiples(parsedArray) {
    // console.log("parcedArray", parsedArray[0]);

    newData = []
    const testArray = parsedArray.splice(0,5)
    newData.push(testArray)

    testArray.map(obj => {
        // console.log("object", obj)

        Object.values(obj).forEach(str => {
            // console.log("value", value)
            if (typeof(str) === "string" && str.includes(",")) {
            // console.log("object key", Object.keys(obj))
            let split = str.split(",");
            let unique = [...new Set(split)];
                unique.shift();
                // console.log(unique)
                if (unique.length) {
                    // console.log("object", obj)
                    let length = unique.length
                    for (i=0; i < length; i++) {
                        let object = {
                            platform_sessions_id: obj.platform_sessions_id,
                            cell_num: obj.cell_num,
                            // procedurecommodity: data.procedurecommodity,
                            // procedurecommoditycat: data.procedurecommoditycat,
                            // proceduredest: data.proceduredest,
                            // procedurerequireddocument: data.procedurerequireddocument,
                            // procedurerelevantagency: data.procedurerelevantagency,
                            // procedureorigin: data.procedureorigin,
                            // commoditycountry: data.commoditycountry,
                            // commoditymarket: data.commoditymarket,
                            commoditycat: unique[i],
                            // commodityproduct: data.commodityproduct,
                            // exchangedirection: data.exchangedirection,
                            created_date: obj.created_date
                        }
                        let newObj = new Object(object)
                        // newObj.object[i] = str
                        // console.log(newObj)
                    }
                }
            } 
        });
    })
  }