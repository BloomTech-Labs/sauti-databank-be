const { products, markets } = require("./dictionary.js")

// ==== SEE BOTTOM OF FILE BEFORE RUNNING ====
// To run the file during testing, run: node ./models/sessionsDataParser.js

module.exports = function dictionaryParcer(data) {
    // data = mockObject

    translatedData = [];

    data.forEach(obj => {
        Object.entries(obj).forEach(entry => {
            if (typeof entry[1] ==="string" && (entry[0]==="procedurecommoditycat"||entry[0]==="procedurecommodity"||entry[0]==="commoditymarket"||entry[0]==="commoditycat" ||entry[0]==="commodityproduct")) {
                obj[entry[0]] = toCaps(entry[1])
            } //this will capitalize the first letter of each word of select props
            
            if (typeof entry[1] ==="string" && entry[0]==="commodityproduct") {
            // console.log(obj[entry[0]])
                Object.entries(products).forEach(productEntry => {
                   if (obj[entry[0]] === productEntry[0]) {
                       obj[entry[0]] = productEntry[1]
                   } 
                })
            } // will run translations for products
   
            if (typeof entry[1] ==="string" && entry[0]==="commoditymarket") {
                Object.entries(markets).forEach(marketEntry => {
                    if (obj[entry[0]] === marketEntry[0]) {
                        obj[entry[0]] = marketEntry[1]
                    }
                })
            } // normalizes the market entries

            if (typeof entry[1] ==="string" && entry[0]==="commodityproduct") {
                const testArray = []
                Object.entries(products).forEach(entries => {
                    testArray.push(entries[0], entries[1])
                })

                if(!testArray.includes(obj[entry[0]])) {
                    // console.log("object", obj)
                    obj.commodityproduct = undefined
                    obj.commoditycat = undefined
                }
            } // removes words that aren't present in the dictionaryParser
        })
        translatedData.push(obj)
        
    })
    // console.log("final", translatedData)
    return translatedData
}

function toCaps(str) {
    str = str.toLowerCase();

    if(/ market/.test(str)){
        str = str.replace(' market','')
    }
    //converts all first letter of words to capitalize
    var splitStr = str.split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' ');
}

//You can uncomment and use this mock object for testing.
// const mockObject = [
//  { 
//     platform_sessions_id: 45495,
//     cell_num: '254000045495',
//     procedurecommodity: 'NGUO',
//     procedurecommoditycat: 'VegetablE',
//     proceduredest: 'KEN->UGA',
//     procedurerequireddocument: undefined,
//     procedurerelevantagency: undefined,
//     procedureorigin: 'EAC',
//     commoditycountry: 'KEN',
//     commoditymarket: 'KITale Market',
//     commoditycat: 'Ifu-ibigori',
//     commodityproduct: 'ibitunguru-umweru',
//     exchangedirection: 'KES->UGX',
//     created_date: '2020-04-13T22:04:20.000Z'
//   },
//   { 
//     platform_sessions_id: 45495,
//     cell_num: '254000045495',
//     procedurecommodity: 'Peanut Butter Sandwich',
//     procedurecommoditycat: 'ANIMAL PRODUCT',
//     proceduredest: 'KEN->UGA',
//     procedurerequireddocument: undefined,
//     procedurerelevantagency: undefined,
//     procedureorigin: 'EAC',
//     commoditycountry: 'KEN',
//     commoditymarket: 'Peatnut Butter',
//     commoditycat: 'cow peas',
//     commodityproduct: 'nyanya',
//     exchangedirection: 'KES->UGX',
//     created_date: '2020-04-13T22:04:20.000Z'
//   },
//   { 
//     platform_sessions_id: 45495,
//     cell_num: '254000045495',
//     procedurecommodity: 'groundNuts',
//     procedurecommoditycat: 'ANIMAL PRODUCT',
//     proceduredest: 'KEN->UGA',
//     procedurerequireddocument: undefined,
//     procedurerelevantagency: undefined,
//     procedureorigin: 'EAC',
//     commoditycountry: 'KEN',
//     commoditymarket: 'MBSA',
//     commoditycat: 'Ground nuts',
//     commodityproduct: 'super rice',
//     exchangedirection: 'KES->UGX',
//     created_date: '2020-04-13T22:04:20.000Z'
//   }
// ]
