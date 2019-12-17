const express = require('express');
const router = express.Router();

const exRate = require('./exchangeRate-model');

//route for Exchange Rate Direction 

router.get('/', (req,res) => {
    exRate.getExRate()
    .then(direction => {
        res.status(200).json(direction);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});
module.exports = router;



