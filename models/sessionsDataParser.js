require("dotenv").config();
let unserializer = require("php-unserialize");
const db = require("./model");

const seperateMultiples = require("./seperateMultiples");
const dictionaryParcer = require("./dictionaryParcer");

// sessionsDataParser.js parses info stored in the DATA COLUMN of "platform_sessions2" table in PHP serialized format, and populates it into "parsed_data" table

// ==== SEE BOTTOM OF FILE BEFORE RUNNING ====
// To run the file during testing, run: node ./models/sessionsDataParser.js

// Documents and Agencies are stored as numbers (Ex: "1", "4") in Lance's database. documentsTypes and agencyTypes are used to pair that number value with appropriate string value
const documentTypes = {
  "1": "Import Permit",
  "2": "Valid Invoice",
  "3": "Simplified Certificate Of Origin (SCOO)",
  "4": "National ID Card/Passport",
  "5": "Yellow Fever Card",
  "6": "Certificate of Origin",
  "7": "Phytosanitary Certificate",
  "8": "Import Entry Declaration Form (SAD)",
  "9": "Fumigation Certificate",
  "10": "Bill of Lading"
};
const agencyTypes = {
  "1": "Ministry of Agriculture Animal Industry & Fisheries (MAAIF)",
  "2": "Kenya Revenue Authority (KRA)",
  "3": "COMESA Trade Information Desk Office (TIDO)",
  "4": "Uganda National Bureau of Standards (UNBS)",
  "6": "PORT Health",
  "7": "Kenya Plant Health Inspectorate Service (KEPHIS)",
  "8": "Uganda Revenue Authority (URA)",
  "9": "Kenya Bureau of Standards (KEBS)",
  "10": "National Biosafety Authority (NBA)",
  "11": "Kenya National Chamber of Commerce & Industry (KNCCI)",
  "12": "Clearing Agent",
  "15": "Uganda Police Dpts"
};

try {
  //Get all un-parsed sessions data information from "platform_sessions2"
  db.findLanceData()
    .then(sessions => {
      //Make new array to populate with the cleaned data:
      const parsedArray = [];
      let err_count = 0;

      // 'data' is the PHP serialized string
      // Filter out any rows where the 'data' column is empty
      let newArr = sessions.filter(row => {
        return row.data.startsWith("a:");
      });

      //Loop through newArr to unserialize the data:
      newArr.forEach(serializedRow => {
        try {
          // CRITICAL! 'php-unserialize' turns PHP serialized data into javascript object.
          // Ex: "a:1:{s:16:"commoditycountry";s:3:"KEN";}" turns into { commoditycountry: KEN }
          const data = unserializer.unserialize(serializedRow.data);

          // Some of the parsed data values come back as Objects, NOT strings like they should be
          // Loop through the data object and format the values appropriately
          for (let key in data) {
            // If the Document or Agency is a STRING, change the number value to it's appropriate string value
            // Ex: { procedurerequireddocument: "1" } turns into { procedurerequireddocument: "Import Permit" }
            if (
              key === "procedurerequireddocument" &&
              typeof data[key] === "string"
            ) {
              data[key] = documentTypes[+data[key]];
            }

            if (
              key === "procedurerelevantagency" &&
              typeof data[key] === "string"
            ) {
              data[key] = agencyTypes[+data[key]];
            } else if (typeof data[key] === "object") {
              // If the value is an OBJECT, set the value of that key:value pair (data[key]) to the values of that object
              // Ex: { procedurecommodity: { "0": "Maize", "1": "Carrots" } } turns into { procedurecommodity: ["Maize", "Carrots"] }
              data[key] = Object.values(data[key]);

              // If the Document or Agency is a OBJECT, change the number value to it's appropriate string value
              // Ex: { procedurerequireddocument: { "0": "1" } } turns into { procedurerequireddocument: "Import Permit" }
              if (key === "procedurerequireddocument") {
                data[key] = data[key].map(num => documentTypes[+num]);
              }

              if (key === "procedurerelevantagency") {
                data[key] = data[key].map(num => agencyTypes[+num]);
              }

              // used to remove numbers from commoditycat (comes in as a mix of numbers and values)
              if (key === "commoditycat") {
                data[key] = data[key].filter(e => e.length > 3);
              }

              // used to remove numbers from commodityproduct (comes in as a mix of numbers and values)
              if (key === "commodityproduct") {
                data[key] = data[key].filter(e => e.length > 3);
              }

              // used to remove numbers from commodityproduct (comes in as a mix of numbers and values) as well as some odd values (single letters and kg repeatedly)
              if (key === "commoditymarket") {
                data[key] = data[key].filter(e => e.length > 3);
              }

              // Turn the value into a string, before it's sent into database table
              // Some values are arrays and can't be stored in the database, which is because a trader's request may contain multiple values for that request_type
              // ["Maize", "Carrots"] turns into "Maize,Carrots"
              data[key] = data[key].toString();
            }
          }

          let sessionObj = {
            platform_sessions_id: serializedRow.sess_id,
            cell_num: serializedRow.cell_num,
            procedurecommodity: data.procedurecommodity,
            procedurecommoditycat: data.procedurecommoditycat,
            proceduredest: data.proceduredest,
            procedurerequireddocument: data.procedurerequireddocument,
            procedurerelevantagency: data.procedurerelevantagency,
            procedureorigin: data.procedureorigin,
            commoditycountry: data.commoditycountry,
            commoditymarket: data.commoditymarket,
            commoditycat: data.commoditycat,
            commodityproduct: data.commodityproduct,
            exchangedirection: data.exchangedirection,
            created_date: serializedRow.created_date.toISOString()
          };

          // There's a lot of extra information in the parsed data we don't use. If the array's values only contain:
          // 'platform_sessions_id', 'cell_num', and 'created_date' (a length of 3), then we don't put it into the database, as it will never be used
          if (
            Object.values(sessionObj).filter(val => val !== undefined).length >
            3
          ) {
            parsedArray.push(sessionObj);
          }
        } catch (err) {
          // There are 5 database entries that have incorrect PHP format, so they fail the "php-unserialize" prompt, and hit this error catch statement
          // This is on Lance's side, nothing that can be done to change the entries
          err_count++;
          console.log(
            "err count: ",
            err_count,
            "sess_id: ",
            serializedRow.sess_id
          );
        }
      });

      //use these to test the length of the original and returned data
      // console.log("length of original data", parsedArray.length)
      const filteredData = seperateMultiples(parsedArray);
      // console.log("filtered", filteredData.length);
      const translatedData = dictionaryParcer(filteredData);
      // console.log("returned data", translatedData.length);

      try {
        // console.log(parsedArray.length)
        console.log("\n** PARSED DATA TABLE **\n", Date(Date.now().toString()));
        //commented out lines 161 and 163 for testing purposes
        // THIS DELETES ALL ENTRIES IN TABLE - COMMENT OUT THIS LINE WHEN TESTING
        db.truncateTable("parsed_data");
        // THIS INSERTS ~80,000 ENTRIES INTO TABLE - COMMENT OUT THIS LINE WHEN TESTING
        db.batchInsert("parsed_data", translatedData);
      } catch {
        console.log("Failed to batch insert");
      }
    })
    .catch(err => console.log("FAILED PROMISE", err));
} catch ({ message }) {
  console.log("message", message);
}
