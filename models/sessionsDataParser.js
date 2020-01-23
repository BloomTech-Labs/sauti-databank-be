require("dotenv").config();
let unserializer = require("php-unserialize");
const db = require("./model");

//sessionsDataParser parses info stored in the DATA COLUMN of platform_sessions table in PHP serialized format, and populates it into new tables to enable building a BE/FE for data portal.

// List of all request_types traders make that we want to parse from the data and put inside the tables
const documentTypes = {
  '1': 'Import Permit',
  '2': 'Valid Invoice',
  '3': 'Simplified Certificate Of Origin (SCOO)',
  '4': 'National ID Card/Passport',
  '5': 'Yellow Fever Card',
  '6': 'Certificate of Origin',
  '7': 'Phytosanitary Certificate',
  '8': 'Import Entry Declaration Form (SAD)',
  '9': 'Fumigation Certificate',
  '10': 'Bill of Lading',
};
const agencyTypes = {
  '1': 'Ministry of Agriculture Animal Industry & Fisheries (MAAIF)',
  '2': 'Kenya Revenue Authority (KRA)',
  '3': 'COMESA Trade Information Desk Office (TIDO)',
  '4': 'Uganda National Bureau of Standards (UNBS)',
  '6': 'PORT Health',
  '7': 'Kenya Plant Health Inspectorate Service (KEPHIS)',
  '8': 'Uganda Revenue Authority (URA)',
  '9': 'Kenya Bureau of Standards (KEBS)',
  '10': 'National Biosafety Authority (NBA)',
  '11': 'Kenya National Chamber of Commerce & Industry (KNCCI)',
  '12': 'Clearing Agent',
  '15': 'Uganda Police Dpts'
};

try {
  //Accessing sessions-model and platform_sessions table:
  db.findLanceData().then(
    //sessions is the entire platform sessions table(array). Filter and get rows that aren't empty:
    sessions => {
      let newArr = sessions.filter(row => {
        return row.data.startsWith("a:");
      });

      //Make new array to populate with the cleaned data:
      let err_count = 0;
      const parsedArray = [];
      
      //Loop through newArr to unserialize the data:
      newArr.forEach(serializedRow => {
        //Created variable and now are unserializing the data that we looped through:
        try {
        //   //Critical! 'php-unserialize' turns PHP serialized data into javascript object.
          const data = unserializer.unserialize(serializedRow.data);

          for (let key in data) {
            if (key === "procedurerequireddocument" && typeof data[key] === "string") {
              data[key] = documentTypes[+data[key]]
            }

            if (key === "procedurerelevantagency" && typeof data[key] === "string") {
              data[key] = agencyTypes[+data[key]]
            } else if (typeof data[key] === "object") {
              data[key] = Object.values(data[key]);

              if (key === "procedurerequireddocument") {
                data[key] = data[key].map(num => documentTypes[+num])
              }

              if (key === "procedurerelevantagency") {
                data[key] = data[key].map(num => agencyTypes[+num])
              }

              data[key] = data[key].toString()
            }
          }

          const sessionObj = {
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
          }

          if (Object.values(sessionObj).filter(val => val !== undefined).length > 3){
            parsedArray.push(sessionObj)
          }
          
        } catch (err) {
          err_count++;
          console.log("err count: ", err_count, "sess_id: ", serializedRow.sess_id);
        }
      });

      try {
        // console.log(parsedArray.length)
        console.log("\n** INFORMATION DEMAND TABLE **\n", Date(Date.now().toString()))
        db.truncateTable('parsed_data');
        db.batchInsert('parsed_data', parsedArray);
      } catch {
        console.log("Failed to batch insert");
      }
    }
  ).catch(err => console.log("FAILED PROMISE", err));
} catch ({ message }) {
  console.log("message", message);
}
