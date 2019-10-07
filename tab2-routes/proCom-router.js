const express = require('express');
const router = express.Router();

const proCom = require('./proCom-model');

router.get('/', (req, res) => {
    proCom.getProCom()
    .then(commodities => {
        res.status(200).json(commodities);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;