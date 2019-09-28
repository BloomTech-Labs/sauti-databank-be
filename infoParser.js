require("dotenv").config();
const Sessions = require("./routes/sessions-model");
let unserializer = require("php-unserialize");
const bcrypt = require("bcryptjs");

try {
 
  
  Sessions.findLanceData().then(
 
    sessions => {
 
      console.log(sessions.length);

 
      let array = sessions.filter(element => {
        return element.data.length > 0;
      });

      console.log(array.length);
      //taking a subset of 10 sessions:
      let newArr = array.slice(0, 2);

      let infoArr = [];

      newArr.forEach((serializedRow, index) => {
        const data = unserializer.unserialize(serializedRow.data);

        console.log(serializedRow);
        console.log(data);

        Object.keys(data).forEach((keyEle, index) => {
          infoArr.push({
            id: infoArr.length,
            session_id: serializedRow.sess_id,
            cell_num: serializedRow.cell_num,
            request_type: keyEle,
            request_value: data[keyEle]
          });
        });
        console.log(infoArr);
      });
    }
  );
} catch ({ message }) {
  console.log(message);
}
//to run this script on the command line, type:  node testParser.js

// console.log(newArr[0].data);
// console.log(Object.keys(newArr[0].data));
// console.log(Object.values(Object.values(newArr[0].data)[12]));
