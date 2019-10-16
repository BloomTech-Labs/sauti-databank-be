const express = require('express');
const router = express.Router();

const TradersGoods = require('./tradersGoods-model');

// Route for Origin of Traders Goods
router.get('/', (req, res) =>{
    TradersGoods
        .getTradersGoods()
        .then(goods => {
            res.status(200).json(goods);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = router;