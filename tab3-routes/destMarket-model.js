const db = require('../data/dbConfig');

module.exports = {
    getDestMarket
};

// Final Destination Market

function getDestMarket() {
    return db.raw('select * from information_demand where request_type_id = 8')
};