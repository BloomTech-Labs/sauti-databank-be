const jwt = require("jsonwebtoken");
const { JWT_SECRET: secret } = require("../config/secrets");

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          errorMessage: `Invalid Credentials.`
        });
      } else {
        req.email = decodedToken.email;
        req.user_id = decodedToken.user_id;
        next();
      }
    });
  } else {
    res.status(400).json({
      errorMessage: `Token was not provided.`
    });
  }
}

module.exports = verifyToken;
