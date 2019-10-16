const express = require('express');
const router = express.Router();

const DestMarket = require('./destMarket-model');

// Final Destination Market

router.get('/', (req, res) => {
	DestMarket.getDestMarket()
		.then(market => {
			res.status(200).json(market);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

module.exports = router;
