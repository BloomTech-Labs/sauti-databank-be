const db = require('../data/dbConfig');

module.exports = {
    getExRate
};

//Exchange Rate direction 
function getExRate(){
    return db('information_demand').where({request_type_id: '11'});
}
