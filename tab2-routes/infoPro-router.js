const express = require('express');
const router = express.Router();

const infoPro = require('./infoPro-model');

//route for Document Information for Procedures 
router.get('/', (req, res)=> {
    infoPro.getInfoPro()
        .then(information => {
            res.status(200).json(information); 
        })
        .catch( err => {
            res.status(500).json(err);
        })
})

module.exports = router;