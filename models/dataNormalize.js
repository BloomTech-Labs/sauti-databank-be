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
            if (typeof entry[1] ==="string" && (entry[0]==="procedurecommoditycat"||entry[0]==="procedurecommodity"||entry[0]==="commoditymarket"||entry[0]==="commoditycat" ||entry[0]==="commodityproduct")) {
                obj[entry[0]] = normalize(entry[1])
            }
        })
        normalizedData.push(obj)
    })
    return normalizedData;
}

function normalize(str) {
    str = str.toLowerCase();
    switch(str){
        case "market":
            str = str.replace(' market', '')
            break;
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
            default:
            true;
            break;
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
//     procedurecommodity: 'NGUO',
//     procedurecommoditycat: 'Vegetables',
//     proceduredest: 'KEN->UGA',
//     procedurerequireddocument: undefined,
//     procedurerelevantagency: undefined,
//     procedureorigin: 'EAC',
//     commoditycountry: 'KEN',
//     commoditymarket: 'Kitale',
//     commoditycat: 'Animal Products',
//     commodityproduct: 'Ibishyimbo',
//     exchangedirection: 'KES->UGX',
//     created_date: '2020-04-13T22:04:20.000Z'
//   },

// ]