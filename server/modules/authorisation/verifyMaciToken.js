const jwt = require("jsonwebtoken");

function verifyMaciToken(req, res, next) {
  // get authorization part of header
  const authorisationHeader = req.headers.authorization;

  // remove Bearer to only get the JWT
  const maciToken = authorisationHeader.replace("Bearer ", "");

  // verify the token was created with maci secret
  const decode = jwt.verify(maciToken, process.env.JWT_SECRET, (error) => {
    if (error) return res.send("Hasta la vista, Aby! (i.e. jwt not verified)");
  });

  console.log(decode);
  next();
}

module.exports = verifyMaciToken;
