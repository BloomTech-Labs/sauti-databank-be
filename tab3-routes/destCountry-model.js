const db = require('../data/dbConfig');

module.exports = {
	getDestCountry
};

// Final Destination Country

function getDestCountry() {
	return db.raw('select * from information_demand where request_type_id = 7');
}
