const { JWT_SECRET } = require("../config/secrets");

const jwt = require("jsonwebtoken");

function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
    password: user.password
  };

  const options = {
    expiresIn: "12h"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;
