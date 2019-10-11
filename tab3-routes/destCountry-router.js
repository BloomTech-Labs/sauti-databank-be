const express = require('express');
const router = express.Router();

const destCountry = require('./destCountry-model');

// Final Destination Country 
router.get('/', (req, res) => {
    destCountry
    .getDestCountry()
    .then(country => {
        res.status(200).json(country);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;