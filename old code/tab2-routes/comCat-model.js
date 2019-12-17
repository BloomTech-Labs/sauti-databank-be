const db = require('../data/dbConfig');

module.exports = {
    getComCat
};

// Procedures for Commodity Categories
function getComCat() {
    return db('information_demand').where({ 'request_type_id': "2"})
};