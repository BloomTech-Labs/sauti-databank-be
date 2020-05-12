module.exports = function separateMultiples(parsedArray) {
    let newNewData = []
    let newData = parsedArray
    // console.log("orginal length", newData.length)
    newData.map(obj => {
        Object.entries(obj).forEach(entry => {
            if (entry[1], typeof(entry[1]) === "string" && entry[1].includes(",")) {
                let propName = entry[0]
                let split = entry[1].split(",");
                let unique = [...new Set(split)];
                unique.shift();
                if (unique.length) {
                    let length = unique.length
                    for (i=0; i < length; i++) {
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
                        newData.push(newObj)
                    }
                }
            } 
        });
    })
  
    newData.map(obj => {
        Object.entries(obj).forEach((entry => {
            if (entry[1], typeof(entry[1]) === "string" && entry[1].includes(",")) {
                let split = entry[1].split(",");
                obj[entry[0]] = split[0]
            }
        }))
        newNewData.push(obj)
    })
    return newNewData
    // console.log("length of the returned data", newNewData.length)
}