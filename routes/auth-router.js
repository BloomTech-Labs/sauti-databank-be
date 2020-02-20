const router = require("express").Router();
const bcrypt = require("bcryptjs");
const generateToken = require("../middleware/generateToken");
const validateLogin = require("../middleware/validateLogin.js");
const Users = require("../models/databankUsers.js");

router.post("/register", (req, res, next) => {
  let user = req.body;
  console.log("user", user);
  const hashedPassword = bcrypt.hashSync(user.password, 8);
  Users.create({ ...user, password: hashedPassword })
    .then(newUser => res.status(201).json(newUser))
    .catch(err => next(err));
});

router.post("/login", validateLogin, (req, res) => {
  res.status(200).json({
    welcomeMessage: `Logged in as ${req.body.email}`,
    userID: req.req_id,
    token: req.body.token
  });
});

module.exports = router;
