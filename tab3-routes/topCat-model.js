const db = require('../data/dbConfig');

module.exports = {
    getTopCat
};

function getTopCat() {
    return db('information_demand').where({request_type_id: '9'})
}