const jwt = require("jsonwebtoken");

function verifyMaciToken(req, res, next) {
  const requestURL = req.url;
  console.log(requestURL);

  const publicURLs = [
    "/slack-sign-in",
    "/slack/oauth_redirect",
    "/songs",
    "/songs/random",
    "/search",
  ];

  const basicURLs = ["/songs/add"];
  const adminURLs = ["/update"];

  // if requestURL is not inside publicURLs then run following code
  if (basicURLs.includes(requestURL) || adminURLs.includes(requestURL)) {
    // get authorization part of header
    const authorisationHeader = req.headers.authorization;

    // checks if authorisationHeader is not empty i.e undefined
    if (authorisationHeader !== undefined) {
      console.log(authorisationHeader);
      // remove Bearer to only get the JWT
      const maciToken = authorisationHeader.replace("Bearer ", "");
      // verify the token was created with maci secret
      // removed error check as causing issues. need to revisit and show error when cant verify token
      const decode = jwt.verify(maciToken, process.env.JWT_SECRET);
      console.log(decode);
      const user_role = decode.role;
      console.log(user_role);

      if (user_role === "admin") {
        if (basicURLs.includes(requestURL) || adminURLs.includes(requestURL)) {
          next();
        }
      }

      if (user_role === "basic" && basicURLs.includes(requestURL)) {
        next();
      } else {
        res.send("you are not authorised");
      }
    } else {
      res.send("no header");
    }
  } else {
    next();
  }
}

// {
//   user_id: userInfo["https://slack.com/user_id"],
//   role: "basic",
// };

module.exports = verifyMaciToken;
