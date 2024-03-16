const jwt = require("jsonwebtoken");

function verifyWorkspaceToken(req, res, next) {
  const requestURL = req.url;
  console.log(requestURL);

  const publicURLs = [
    "/slack-sign-in",
    "/slack/oauth_redirect",
    "/songs",
    "/songs/random",
    "/search",
  ];

  // const basicURLs = ["/songs/add"];
  // const adminURLs = ["/update"];
  //regex patterns to check if url starts with /update or /songs/add. regex is used so that if a / or ? is included at the end of the url, it will still be blocked unlike using array.includes where the url must match exactly
  const basicURLsRE = /^\/songs\/add/;
  const adminURLsRE = /^\/update/;

  // if requestURL is not inside publicURLs (therefore a private URL) then run following code
  if (basicURLsRE.test(requestURL) || adminURLsRE.test(requestURL)) {
    // get authorization part of header
    const authorisationHeader = req.headers.authorization;

    // checks if authorisationHeader is not empty i.e undefined
    if (authorisationHeader !== undefined) {
      console.log(authorisationHeader);
      // remove Bearer to only get the JWT
      const workspaceToken = authorisationHeader.replace("Bearer ", "");
      // verify the token was created with workspace secret
      // removed error check as causing issues. need to revisit and show error when cant verify token
      const decode = jwt.verify(workspaceToken, process.env.JWT_SECRET);
      console.log(decode);
      const user_role = decode.role;
      console.log(user_role);

      if (user_role === "admin") {
        next();
      }

      if (user_role === "basic" && basicURLsRE.test(requestURL)) {
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

module.exports = verifyWorkspaceToken;
