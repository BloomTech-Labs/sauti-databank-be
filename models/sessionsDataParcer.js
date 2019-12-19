//this will be used to create the if/else statements for the request types
require("dotenv").config();
const Sessions = require("./routes/sessions-model");
let unserializer = require("php-unserialize");
const bcrypt = require("bcryptjs");
const InfoDemand = require("./models/infodemand-model");

//The purpose of this data parser is to parse the info that is stored inside the data column of the platform_sessions table in PHP serialized format, and populate it into new tables built according to this data model (ADD HERE) to enable building a backend/frontend for the data portal

// this is the list of all the types of requests that traders make that we want to parse from the data and put inside the tables
const request_types = [
  "procedurecommodity",
  "procedurecommoditycat",
  "proceduredest",
  "procedurerequireddocument",
  "procedurerelevantagency",
  "procedureorigin",
  "commoditycountry",
  "commoditymarket",
  "commoditycat",
  "commodityproduct",
  "exchangedirection"
];

try {
  //accessing the session model and the platform sessions table
  Sessions.findLanceData().then(
    //sessions is the entire platform sessions table(array)
    sessions => {
      //sessions filtering through each row and grabbing/getting each row that has non-zero data field
      //we don't need to unserialize if it doesn't have data
      let newArr = sessions.filter(row => {
        return row.data.length > 0;
      });

      // making a new array that we'll populate with the cleaned data. This is the array that will be used to then populate the
      let infoArr = [];

      let err_count = 0;
      //looping through the newArr to unserialize the data that's in it
      newArr.forEach((serializedRow, index) => {
        // we created a variable and now we are unserializing the data that we looped through

        try {
          //this line is very critical in that it uses the npm package php-unserialize to take PHP serialized data and turn it into a javascript object
          const data = unserializer.unserialize(serializedRow.data);

          //Object.keys turns the set of keys in the data object into an array so we can loop over them with a forEach.
          Object.keys(data).forEach(key => {
            //next, we need to take each key in the data object and check to see if it is in the request_types array (line 11) because those are the only keys we are interested in.
            request_types.forEach(request_type => {
              if (key === request_type) {
                const request_value = data[key];
                // we then check the value for each key. The value is stored in 2 different formats so we have an if/else statement to handle the two formats:
                // format 1: if request_value is stored as a string
                if (typeof request_value === "string") {
                  infoArr.push({
                    id: infoArr.length, //incrementing the id by the length of the array
                    platform_sessions_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
                    cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
                    request_type_id: request_types.indexOf(key) + 1, //foreign key equivalence
                    request_value: data[key] //request_value is receiving its value from the data variable which uses the key element as its index
                  });
                }
                // format 2: if request_value is stored as an object of several values. Te storage format is {"0": "KEN", "1": "RWA"..}
                else {
                  Object.values(request_value).forEach(value => {
                    infoArr.push({
                      id: infoArr.length, //incrementing the id by the length of the array
                      platform_sessions_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
                      cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
                      request_type_id: request_types.indexOf(key) + 1,
                      request_value: value //request_value is receiving its value from the data variable which uses the key element as its index
                    });
                  });
                }
              }
            });
          });
        } catch (err) {
          err_count++;
          console.log(
            "err count: ",
            err_count,
            "sess_id: ",
            serializedRow.sess_id
          );
        }
      });

      // now, we add the array of unerialized and correctly sorted data to the information_demand table. The data addition was a manual process due to the rate at which the addition is happening is too quick for the database so it times out. We would've ideally liked to automate this batch processing and we tried several things to make it happen but they didn't work so in interest of time, we manually processed ~3000 rows at a time.
      for (const info_row of infoArr.slice(52000, infoArr.length)) {
        try {
          //see infodemand-model for the function that adds the rows into the information_demand table
          // InfoDemand.add(info_row);
          console.log(info_row)
        } catch ({ message }) {
          //
          console.log(message);
        }
      }

      // }
    }
  );
} catch ({ message }) {
  console.log("message", message);
} // if we don't successfully retrieve the data we should see an error message
//to run this script on the command line, type:  node testParser.js

module.exports = Sessions;
/** 11 if /else statements
 * procedurecommodity
 * procedurecommoditycat
 * proceduredest
 * procedurerequireddocument
 * procedurerelevantagency
 * procedureorigin
 * commoditycountry
 * commoditymarket
 * commoditycat
 * commodityproduct
 * exchangedirection
 *
 */