const express = require('express');
const router = express.Router();

const ComCat = require('./comCat-model');

// route for Procedures for Commodity Categories

router.get('/', (req, res) => {
    ComCat.getComCat()
        .then(category => {
            res.status(200).json(category);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});


module.exports = router;