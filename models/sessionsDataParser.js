require("dotenv").config();
let unserializer = require("php-unserialize");
const db = require("./model");

//sessionsDataParser parses info stored in the DATA COLUMN of platform_sessions table in PHP serialized format, and populates it into new tables to enable building a BE/FE for data portal.

// List of all request_types traders make that we want to parse from the data and put inside the tables
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
'12':	'Clearing Agent',
'15':	'Uganda Police Dpts'
};

try {
  //Accessing sessions-model and platform_sessions table:
  db.findLanceData().then(
    //sessions is the entire platform sessions table(array). Filter and get rows that aren't empty:
    sessions => {
      let newArr = sessions.filter(row => {
        return row.data.length > 0;
      });

      //Make new array to populate with the cleaned data:
      let infoArr = [];
      let err_count = 0;

      //Loop through newArr to unserialize the data:
      newArr.forEach((serializedRow, index) => {
        //Created variable and now are unserializing the data that we looped through:
        // console.count(serializedRow)
        try {
          //Critical! 'php-unserialize' turns PHP serialized data into javascript object.
          const data = unserializer.unserialize(serializedRow.data);

          //Object.keys turns keys in data object into an array we can loop over:
          Object.keys(data).forEach(key => {
            
            //Next check keys in data object to see if its in request_types array (line 11):
            request_types.forEach(request_type => {
              if (key === request_type) {
                let request_value = data[key];
                
                if(request_type === 'procedurerequireddocument'){
                    for (let obj in request_value){
                      request_value = {
                        ...request_value,
                        [obj]: documentTypes[request_value[obj]]
                      }
                  }
                } else if (request_type === 'procedurerelevantagency'){                  
                  for (let obj in request_value){
                    request_value = {
                      ...request_value,
                      [obj]: agencyTypes[request_value[obj]]
                    }
                  }
                }

                //Then check each key's value. Its stored in 2 different formats:
                //FORMAT 1: request_value is stored as STRING:
                if (typeof request_value === "string") {
                  if (request_type === 'procedurerequireddocument'){
                    request_value = {'0': request_value}
                  } else {
                    infoArr.push({
                      platform_sessions_id: serializedRow.sess_id, // from serialized data in newArr that was created from the sess_id: value
                      cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
                      request_type_id: request_types.indexOf(key) + 1, //foreign key equivalence
                      request_type: request_type,
                      request_value: request_value,//request_value receiving its value from the data variable which uses the key element as its index
                      created_date: serializedRow.created_date.toISOString()
                    });
                  }
                }

                //FORMAT 2: request_value is stored as an OBJECT with several values: {"0": "KEN", "1": "RWA"..}
                else {
                  Object.values(request_value).forEach(value => {
                    infoArr.push({
                      platform_sessions_id: serializedRow.sess_id, // from serialized data in the newArr created from the sess_id: value
                      cell_num: serializedRow.cell_num, // from the serialized data in the newArr created from the cell_num: value
                      request_type_id: request_types.indexOf(key) + 1,
                      request_type: request_type,
                      request_value: value, //receives its value from data variable which uses the key element as its index
                      created_date: serializedRow.created_date.toISOString() 
                    });
                  });
                }
              }
            });
          });
        } catch (err) {
          err_count++;
          console.log("err count: ", err_count, "sess_id: ", serializedRow.sess_id);
        }
      });

      try {
          db.batchInsertInfoDemand(infoArr);
      } catch {
          console.log("Failed to batch insert");
      }
    }
  ).catch(err => console.log("FAILED PROMISE", err));
} catch ({ message }) {
  console.log("message", message);
} // If data retrieval unsuccessful, recieve an error message.
//To run this script on the command line, type:  node testParser.js
