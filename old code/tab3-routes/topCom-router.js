const express = require('express');
const router = express.Router();

const topCom = require('./topCom-model');

router.get('/', (req, res) => {
    topCom.getTopCom()
    .then(commodity => {
        res.status(200).json(commodity)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
module.exports = router;
