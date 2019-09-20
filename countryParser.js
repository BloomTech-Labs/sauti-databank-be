require("dotenv").config();
const Sessions = require("./routes/sessions-model");
let unserializer = require("php-unserialize");
const bcrypt = require("bcryptjs");

// make sure you have php-unserialize in your package.json. If not, yarn add php-unserialize

try {
  //fetch all rows from the platform_sessions data
  Sessions.findLanceData().then(
    //taking sessions data table:
    sessions => {
      //checking to see how many rows it has:
      console.log(sessions.length);

      //building an an array with only those sessions that have a  non-null data field:
      let array = sessions.filter(element => {
        return element.data.length > 400 && element.data.includes("lang");
      });

      console.log(array.length);
      //taking a subset of 10 sessions:
      let newArr = array.slice(0, 1);
      let languageArr = [];

      newArr.forEach((element1, index) => {
        const data = unserializer.unserialize(element1.data);

        console.log(element1);

        Object.values(data.language).forEach((element2, index) => {
          console.log(element2);
          languageArr.push({
            id: languageArr.length,
            session_id: element1.sess_id,
            language: element2
          });
        });
        console.log(languageArr);
      });
    }
  );
} catch ({ message }) {
  console.log(message);
}
//to run this script on the command line, type:  node testParser.js
