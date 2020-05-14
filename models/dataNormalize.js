// ==== SEE BOTTOM OF FILE BEFORE RUNNING ====
// To run the file during testing, run: node ./models/sessionsDataParser.js

module.exports = function dataNormalize(filteredData) {
    //uncomment this line of code for testing to shorten array to splice (* is length)
    // filteredData = filteredData.splice(0, 5)
    // const filteredData = mockObject;
    normalizedData = []

    filteredData.forEach(obj => {
        Object.entries(obj).forEach(entry => {
            const propName = entry[0];
            const value = entry[1];
            
            //put here list of keys we want checked
            if ((entry[0]) === ("procedurecommodity" || "procedurecommoditycat" || "commoditymarket" || "commoditycat" || "commodityproduct") && typeof(entry[1]) ==="string") {
                // console.log("before --",entry[1])
                obj[entry[0]] = normalize(entry[1])
                // console.log("after --", entry[1])
            }
        })
        normalizedData.push(obj)
    })
    // console.log("FilteredData after normalize", newData)
    return normalizedData;
}

function normalize(str) {
    str = str.toLowerCase();
    if (str.includes("market")) {
        str = str.replace(' market', '')
    }
    var splitStr = str.toLowerCase().split(' ');
    
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' ');
 }

// const mockObject = [
//  { 
//     platform_sessions_id: 45495,
//     cell_num: '254000045495',
//     procedurecommodity: 'Kales',
//     procedurecommoditycat: 'Vegetables',
//     proceduredest: 'KEN->UGA',
//     procedurerequireddocument: undefined,
//     procedurerelevantagency: undefined,
//     procedureorigin: 'EAC',
//     commoditycountry: 'KEN',
//     commoditymarket: 'Kitale',
//     commoditycat: 'Animal Products',
//     commodityproduct: 'Eggs',
//     exchangedirection: 'KES->UGX',
//     created_date: '2020-04-13T22:04:20.000Z'
//   },

// ]