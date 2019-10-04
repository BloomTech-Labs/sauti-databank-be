const db = require('../data/dbConfig');

module.exports = {
	getReqAge
};

function getReqAge() {
	return db('information_demand').where({ request_type_id: '5' });
}

// DB model for Requested Agency Information for Procedures
