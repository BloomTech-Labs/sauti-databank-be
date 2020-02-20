const router = require("express").Router();
const bcrypt = require("bcryptjs");
const validateLogin = require("../middleware/validateLogin.js");
const Users = require("../models/databankUsers.js");
const jwt = require("jsonwebtoken");
const { JWT_SECRET: secret } = require("../config/secrets");

router.post("/register", (req, res, next) => {
  let user = req.body;
  const hashedPassword = bcrypt.hashSync(user.password, 8);
  Users.create({ ...user, password: hashedPassword })
    .then(newUser => res.status(201).json(newUser))
    .catch(err => next(err));
});

router.post("/login", validateLogin, (req, res) => {
  const token = generateToken(req.body);
  res.status(200).json({
    welcomeMessage: `Logged in as ${req.body.email}`,
    userID: req.req_id,
    token: token
  });
});

// Helper
function generateToken(user) {
  const payload = {
    subject: user.id,
    id: user.id,
    email: user.email,
    tier: user.tier
  };

  const options = {
    expiresIn: "12h"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
