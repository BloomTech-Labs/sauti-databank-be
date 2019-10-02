//this will be used to create the if/else statements for the request types
require('dotenv').config();
const Sessions = require('./routes/sessions-model');
let unserializer = require('php-unserialize');
const bcrypt = require('bcryptjs');
const InfoDemand = require('./routes/infodemand-model');

const request_types = [ 
  'procedurecommodity',
  'procedurecommoditycat',
  'proceduredest',
  'procedurerequireddocument',
  'procedurerelevantagency',
  'procedureorigin',
  'commoditycountry',
  'commoditymarket',
  'commoditycat',
  'commodityproduct',
  'exchangedirection']

try {
  //accessing the session model and and the platform sessions table
  Sessions.findLanceData().then(
    //sessions is the entire platform sessions table(array)
    sessions => {
      // console.log('sessions size', sessions.length);

      //sessions filtering through each row and grabbing/getting each row that has non-zero data field
      //we don't need to unserialize if it doesn't have data
      let array = sessions.filter(row => {
        return row.data.length > 0;
      });

      // console.log('Array size', array.length);
      //slicing the array to condense the amount of data retrieved/taking a subset of 2 sessions:
      let newArr = array.slice(0, 4);
      // making a new array
      let infoArr = [];
      //looping through the new array
      newArr.forEach((serializedRow, index) => {
        // we created a variable and now we are unserializing the data that we looped through
        const data = unserializer.unserialize(serializedRow.data);

        // console.log('Row', serializedRow); //serialized row of data
        // console.log('data object', data); //unserialized data
        //Object.keys returning the enumerable keys from the data, looping through each key and pushing this info into the empty infoArr
        Object.keys(data).forEach((keyEle, index) => {
          // console.log('Key', keyEle);
          console.log(request_types)
          request_types.forEach( request_type => {
          if (keyEle === request_type) {
            infoArr.push({
              id: infoArr.length, //incrementing the id by the length of the array
              platform_sessions_id: serializedRow.sess_id, // from the serialized data in the newArr that was created from the sess_id: value
              cell_num: serializedRow.cell_num, // from the serialized data in the newArr that was created from the cell_num: value
              request_type_id: request_types.indexOf(keyEle)+1,
              request_value: data[keyEle] //request_value is receiving its value from the data variable which uses the key element as its index
            });
          
          }
        })
        });
        // console.log('infoArr', infoArr); //Seeing if the array now has access to the key value pairs(data)
      });
      console.log('infoArr', infoArr);
      console.log('infoArr length', infoArr.length)

      try {
        for (const info_row of infoArr) {
          console.log('row',info_row );
           InfoDemand.add(info_row) 
        }
      }
      catch ({ message}) {
        console.log(message);
      }
    }
  );
} catch ({ message }) {
  // console.log('message', message);
} // if we don't successfully retrieve the data we should see an error message
//to run this script on the command line, type:  node testParser.js

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
