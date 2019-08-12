const express = require("express");
const router = express.Router();

const Sessions = require("./sessions-model");
const Users = require("./users-model");


// Returns a list of all sessions
router.get("/all", (req, res) => {
  Sessions.find()
    .then(sessions => {
      res.status(200).json(sessions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Returnt a list of all products 
router.get("/products/:id", (req, res) => {
  const { id } = req.params;

  Sessions.getProduct(id)
    .then(sessions => {
      res.status(200).json(sessions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/real/all", (req, res) => {
  Sessions.findRealSessions()
    .then(sessions => {
      res.status(200).json(sessions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/lance/all", (req, res) => {
  Sessions.findLanceData()
    .then(sessions => {
      res.status(200).json(sessions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
