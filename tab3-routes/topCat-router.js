const express = require('express');
const router = express.Router();

const topCat = require('./topCat-model');

router.get('/', (req, res) => {
    topCat.getTopCat()
    .then(commodity => {
        res.status(200).json(commodity)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
module.exports = router;