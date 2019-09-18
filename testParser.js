require("dotenv").config();
const Sessions = require("./routes/sessions-model");
let unserializer = require("php-unserialize");
const bcrypt = require("bcryptjs");

// make sure you have php-unserialize in your package.json. If not, yarn add php-unserialize

try {
  //fetch all rows from the platform_sessions data
  Sessions.findLanceData().then(
    //taking sessions data
    sessions => {
      console.log(sessions.length);
      var array = sessions.filter(element => {
        return element.data.length > 0;
      });

      var newArr = array.slice(0, 10);
      newArr.map((element, index) => {
        console.log(`${index}`);
        console.log(element.data);
        console.log(unserializer.unserialize(element.data));
      });
    }
  );
} catch ({ message }) {
  console.log(message);
}
//to run this script on the command line, type:  node testParser.js
