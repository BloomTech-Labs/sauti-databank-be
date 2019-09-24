require("dotenv").config(); //loads environment variables from .env file into process.env. process.env: property returns an object containing the user environment
const Sessions = require("./routes/sessions-model"); //importing Sessions from sessions-model
let unserializer = require("php-unserialize"); //javascript tool to unserialize data taken from PHP
const bcrypt = require("bcryptjs"); //library to help hash passwords 

//try...catch statement marks a block of statements to try, and specifies a response should an exception be thrown 

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
        let newArr = array.slice(0, 10);
        let languageArr = [];
  
       newArr.forEach((element1, index) => {
          const data = unserializer.unserialize(element1.data).commoditycountry;
            //console.log(data);
         console.log(element1);
  
         data && Object.values(data).forEach((element2, index) => {
            languageArr.push({
              id: languageArr.length,
              session_id: element1.sess_id,
              country: element2
            });
          });
          console.log(languageArr);
        });
      }
    );
  } catch ({ message }) {
    console.log(message);
  }
  //to run this script on the command line, type:  node languageParser.js