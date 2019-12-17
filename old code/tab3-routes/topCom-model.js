const db = require('../data/dbConfig');

module.exports = {
    getTopCom
};

function getTopCom() {
    return db('information_demand').where({request_type_id: '10'})
}