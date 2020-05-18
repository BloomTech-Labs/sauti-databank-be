// ==== SEE BOTTOM OF FILE BEFORE RUNNING ====
// To run the file during testing, run: node ./models/sessionsDataParser.js

module.exports = function dataNormalize(filteredData) {
    //uncomment this line of code for testing to shorten array to splice (* is length)
    // filteredData = filteredData.splice(0, 5)
    //or you can uncomment the mock object below and uncomment this line depenting on what you would like to test
    // const filteredData = mockObject;
    //new array of data where we will put the final normalized array
    normalizedData = []

    filteredData.forEach(obj => {
        Object.entries(obj).forEach(entry => {
            //put here list of keys we want checked
            //filters out entries into the 5 keys that could need to be changed
            if (typeof entry[1] ==="string" && (entry[0]==="procedurecommoditycat"||entry[0]==="procedurecommodity"||entry[0]==="commoditymarket"||entry[0]==="commoditycat" ||entry[0]==="commodityproduct")) {
                obj[entry[0]] = normalize(entry[1])
            }
        })
        normalizedData.push(obj)
    })
    // console.log("final", normalizedData)
    return normalizedData;
}

function normalize(str) {
    str = str.toLowerCase();
    // Translates several words to english and replaces them
    switch(str){
        case "ibishyimbo":
            str = str.replace('ibishyimbo', 'beans')
        break;
        case "mpunga":
            str = str.replace('mpunga', 'rice')
        break;
        case "nguo":
            str = str.replace('nguo', 'clothing')
        break;
        case "nyanya":
            str = str.replace('nyanya', 'tomatoes')
        break;
        case "umuceri":
            str = str.replace('umuceri', 'rice')
        break;
        case "animal product":
            str = str.replace("animal product", "animal products")
        break;
        case 'groundnuts':
            str = str.replace('groundnuts', "ground nuts")
        break;
        case 'vegetable':
            str = str.replace("vegetable", "vegetables")
        break;
    default:
    true;
    break;
  }

  //had a hard time doing two word inputs in the switch (especially Market where the first word could be anything) so we used if statements
  if(/farm/.test(str) && /input/.test(str)){
    str = 'farm inputs'
    }

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
//     commoditycat: 'farm input',
//     commodityproduct: 'Ibishyimbo',
//     exchangedirection: 'KES->UGX',
//     created_date: '2020-04-13T22:04:20.000Z'
//   },
//   { 
//     platform_sessions_id: 45495,
//     cell_num: '254000045495',
//     procedurecommodity: 'umuceri',
//     procedurecommoditycat: 'ANIMAL PRODUCT',
//     proceduredest: 'KEN->UGA',
//     procedurerequireddocument: undefined,
//     procedurerelevantagency: undefined,
//     procedureorigin: 'EAC',
//     commoditycountry: 'KEN',
//     commoditymarket: 'KITale MARKET',
//     commoditycat: 'Farm Input',
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
//     commoditymarket: 'KITale MARKET',
//     commoditycat: 'Ground nuts',
//     commodityproduct: 'GROUNDNUTS',
//     exchangedirection: 'KES->UGX',
//     created_date: '2020-04-13T22:04:20.000Z'
//   }
// ]