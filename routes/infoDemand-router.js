const express = require('express');
const db = require('./infodemand-model');
const Sessions = require('../DRYParser');
const router = express.Router();

router.post('/', (req,res )=> {
    console.log(Sessions)
    db.add(Sessions).then(data => res.json(data))
})

router.get('/', (req, res) => {
    db.get().then(data => res.json(data))
})

module.exports = router