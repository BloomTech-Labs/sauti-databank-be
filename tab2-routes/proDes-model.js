const db = require('../data/dbConfig');

module.exports = {
	getDesInfo
};

// Model for the Procedures for Destination
function getDesInfo() {
	return db('information_demand').where({ request_type_id: '3' });
}
