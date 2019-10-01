require("dotenv").config();
const Sessions = require("./routes/sessions-model");
let unserializer = require("php-unserialize");
const bcrypt = require("bcryptjs");

// make sure you have php-unserialize in your package.json. If not, yarn add php-unserialize

try {
  //fetch all rows from the platform_sessions data
  Sessions.findLanceData().then(
    //taking the platform_sessions data table (called sessions below):
    sessions => {
      //checking to see how many rows it has:
      console.log(typeof sessions);
      console.log(sessions.length);

      //building an an array with only those sessions that have a  non-null data field:
      let array = sessions.filter(element => {
        return element.data.length > 500;
      });

      console.log(array.length);
      //taking a subset of 10 sessions:
      let newArr = array.slice(0, 10);

      //testing out unserializer
      newArr.map((element, index) => {
        //printing the index:
        console.log(`${index}`);
        //printing the unserialized data:
        console.log(element.data);
        //printing the serialized data:
        console.log(unserializer.unserialize(element.data));
      });
    }
  );
} catch ({ message }) {
  console.log(message);
}
//to run this script on the command line, type:  node testParser.js
