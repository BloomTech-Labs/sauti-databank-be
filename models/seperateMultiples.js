// ==== SEE BOTTOM OF FILE BEFORE RUNNING ====
// To run the file during testing, run: node ./models/sessionsDataParser.js

module.exports = function separateMultiples(parsedArray) {
    //uncomment this line of code for testing to shorten array to splice (* is length)
    // parsedArray = parsedArray.splice(0, 5)
    //make a new array that will contain the final array of Data
    let newData = []   
    //use the console log below the see the number of entries in the original data array
    // console.log("orginal length", parsedArray.length)
    //maps througth the array as objects
    parsedArray.forEach(obj => {
        //splits the entries into arrays entry[0] is the key and entry[1] is the value
        Object.entries(obj).forEach(entry => {
            //checks if the entry is a string including commas that indicates multiple peices of data that need to be new objects
            if (entry[1], typeof(entry[1]) === "string" && entry[1].includes(",")) {
                //creates a variable equal to the key name
                let propName = entry[0]
               //tuns the values into an array called split with each value representing a 
                let split = entry[1].split(",");
                 //turns the strings with commas in them into an array into a set, sets can only contain unique values.
                let unique = [...new Set(split)];
                //takes off the first string so that we do not get duplicates (original object is altered below, and first string is kept)
                unique.shift();
                //checks if the shifted array still containes strings
                if (unique.length) {
                    //creates a for loop to run through the entries
                    let length = unique.length
                    for (i=0; i < length; i++) {
                        //creates a new object with the same shape as the original
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
                        //sets the key equal to the original entry key and the value equal to the created value
                        object[propName] = unique[i];
                        //sets a variable newObj equal to the created object
                        let newObj = new Object(object)
                        //pushes the new object onto the end of the original data array
                        parsedArray.push(newObj)
                    }
                }
            } 
        });
    })
    
    //maps through the new array of objects with the new objects included
    parsedArray.forEach(obj => {
        //maps through and breaks the entries into arrays (ex ["platform_sessions_id", "12345"])
        Object.entries(obj).forEach((entry => {
            // if the entry is a string with commas indicating it was broken into muleiple objects above it passes this filter
            if (entry[1], typeof(entry[1]) === "string" && entry[1].includes(",")) {
                //creates an array called split equal to the values of the oject
                let split = entry[1].split(",");
                //sets the key equal to the first entry in the split array
                obj[entry[0]] = split[0]
            }
        }))
        //pushes the object back onto a new array
        newData.push(obj)
    })
    //uncomment this console log to see the retured data
    // console.log(newData)
    //use this console log to check the lenth of the retuned array of data
    // console.log("length of the returned data", newData.length)
    return newData
}