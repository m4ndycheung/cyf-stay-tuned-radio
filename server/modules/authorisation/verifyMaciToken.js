const jwt = require("jsonwebtoken");

function verifyWorkspaceToken(req, res, next) {
  const requestURL = req.url;
  console.log(requestURL);

  // //regex patterns to check if url starts with /update or /songs/add. regex is used so that if a / or ? is included at the end of the url, it will still be blocked unlike using array.includes where the url must match exactly
  const basicURLsRE = /^\/songs\/add/;
  const adminURLsRE = /^\/update/;

  // // if requestURL is not inside publicURLs (therefore a private URL) then run following code
  if (basicURLsRE.test(requestURL) || adminURLsRE.test(requestURL)) {
    //   // get authorization part of header
    if (req.headers.authorization !== null) {
      if (req.headers.authorization !== undefined) {
        const authorisationHeader = req.headers.authorization;
        console.log(`BOOP ${authorisationHeader}`);
        // remove Bearer to only get the JWT
        const workspaceToken = authorisationHeader.replace("Bearer ", "");
        // removed error check as causing issues. need to revisit and show error when cant verify token
        // verify the token was created with workspace secret
        const decode = jwt.verify(workspaceToken, process.env.JWT_SECRET);
        console.log(decode);
        const userRole = decode.role;
        console.log(userRole);
        if (basicURLsRE.test(requestURL)) {
          next();
        }
        if (adminURLsRE.test(requestURL)) {
          if (userRole === "admin") {
            next();
          } else {
            res.send({ message: "you are not authorised" });
          }
        }
      } else {
        res.send({ message: "no header" });
      }
    }
  } else {
    next();
  }
}

module.exports = verifyWorkspaceToken;
