require("dotenv").config();
const Sessions = require("./routes/sessions-model");
let unserializer = require("php-unserialize");
const bcrypt = require("bcryptjs");

try {
  Sessions.findLanceData().then(sessions => {
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
  });
} catch ({ message }) {
  console.log(message);
}
