const express = require('express');
const router = express.Router();


const ProDes = require('./proDes-model');

// Route for the Procedures for Destination

router.get('/', (req, res) => {
    ProDes.getDesInfo()
        
        .then(dest => {
            
            res.status(200).json(dest);
            

        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;