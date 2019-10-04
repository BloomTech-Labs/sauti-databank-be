const express = require('express');
const router = express.Router();

const ReqAge = require('./mostReqAge-model');

router.get('/', (req, res) => {
	ReqAge.getReqAge()
		.then(reqAge => {
			res.status(200).json(reqAge);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});
// DB model for Requested Agency Information for Procedures
module.exports = router;
