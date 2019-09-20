const express = require("express");
const router = express.Router();

const Sessions = require("./sessions-model");
const Users = require("./users-model");

// Returns a list of all databank sessions
router.get("/all", (req, res) => {
  Sessions.findLanceData()
    .then(sessions => {
      console.log(sessions);
      res.status(200).json(sessions);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Returns a list of sessions where a specific product was searched by ID
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

// Returns a list of all real sessions from a csv import
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
