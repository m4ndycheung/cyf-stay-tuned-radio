const jwt = require("jsonwebtoken");

function verifyMaciToken(req, res, next) {
  console.log("verified a token cake");
  next();
}

module.exports = verifyMaciToken;
