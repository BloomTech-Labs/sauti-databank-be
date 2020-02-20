const bcrypt = require("bcryptjs");
const Users = require("../models/databankUsers");

function validateLogin(req, res, next) {
  let { email, password } = req.body;

  if (email && password) {
    Users.findByEmail(email)
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          let { id, ...objNoId } = user; // objNoId represents all params after ID.
          req.body = objNoId;
          req.req_id = id;
          next();
        } else {
          res.status(401).json({
            errorMessage: "There is no account with given credentials."
          });
        }
      })
      .catch(error => {
        console.log(error.message);
        res
          .status(500)
          .json({ serverMessage: "There has been a server problem." });
      });
  } else {
    res
      .status(400)
      .json({ errorMessage: "Please provide a username and password!" });
  }
}

module.exports = validateLogin;
