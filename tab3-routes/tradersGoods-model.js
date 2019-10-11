const db = require('../data/dbConfig');

module.exports = {
    getTradersGoods
};

function getTradersGoods(param) { 
    return db('information_demand').where({ request_type_id: '6'})
 }