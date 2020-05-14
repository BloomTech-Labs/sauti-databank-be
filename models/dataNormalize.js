
//  // ==== SEE BOTTOM OF FILE BEFORE RUNNING ====
// // To run the file during testing, run: node ./models/sessionsDataParser.js

// const mockObject = [
//     {
//     platform_sessions_id: 45,
//     cell_num: 2500902654,
//     procedurecommodity: undefined,
//     procedurecommoditycat: undefined,
//     proceduredest: undefined,
//     procedurerequireddocument: undefined,
//     procedurerelevantagency: "Uvira (maendeleo)",
//     procedureorigin: "kirambo Market",
//     commoditycountry: "AMATA",
//     commoditymarket: "Kasumbalesa market",
//     commoditycat: "Cereal - maize",
//     commodityproduct: "white beans",
//     exchangedirection: undefined,
//     created_date: 0982043572093
// }
// ]

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
            if (typeof(entry[1]) ==="string") {
                // console.log("before --",entry[1])
                obj[entry[0]] = titleCase(entry[1])
                // console.log("after --", entry[1])
            }
        })
        normalizedData.push(obj)
    })
    // console.log("FilteredData after normalize", newData)
    return normalizedData;
}

// Needs to check for country/market acronyms not to send those to lowercase.
// Needs to check list of keys i.e. (proceduredest,)

function titleCase(str) {
    str = str.toLowerCase();
    if (str.includes("market")) {
        // console.log("string has market", str)
        str = str.replace(' market', '')
        // console.log("string removes market", str)
    }
    var splitStr = str.toLowerCase().split(' ');
    
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' ');
 }

//  { x === ignore
//x     platform_sessions_id: 45495,
// x    cell_num: '254000045495',
//     procedurecommodity: 'Kales',
//     procedurecommoditycat: 'Vegetables',
//  x   proceduredest: 'KEN->UGA',
//   x  procedurerequireddocument: undefined,
//    x procedurerelevantagency: undefined,
//x     procedureorigin: 'EAC',
// x    commoditycountry: 'KEN',
//     commoditymarket: 'Kitale',
//     commoditycat: 'Animal Products',
//     commodityproduct: 'Eggs',
//  x   exchangedirection: 'KES->UGX',
//   x  created_date: '2020-04-13T22:04:20.000Z'
//   },

