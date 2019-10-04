const db = require('../data/dbConfig'); // import the data base 

module.exports = {
    getInfoPro
} // export all the helper functions you create 

// create a function to locate the document information for procedures get
function getInfoPro(){
    return db('information_demand').where({request_type_id: '4'})
}// reach a specific portion of the db, specifically locate the table you want to extract these data points from 
//.where is specifically pointing to the portion of the table that you want to access 
