const db = require('../data/dbConfig');

module.exports = {
    getProCom
};

// Procedures for Commodity

function getProCom() {
    return db('information_demand').where({request_type_id: '1'});
}