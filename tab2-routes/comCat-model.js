const db = require('../data/dbConfig');

module.exports = {
    getComCat
};

function getComCat() {
    return db('information_demand').where({ 'request_type_id': "2"})
};