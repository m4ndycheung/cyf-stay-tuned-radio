const crypto = require("crypto");
const querystring = require("querystring");

const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;

const initiateLogin = function (req, res) {
  console.log(CLIENT_ID);
  const generateRandomString = (length) => {
    return crypto.randomBytes(60).toString("hex").slice(0, length);
  };

  const stateKey = "spotify_auth_state";

  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  // Go to docs to know which scopes are needed
  const scope =
    "user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public";

  // querystring.stringify() method produces a URL query string from a given obj by iterating through the object's "own properties".
  const queryParams = querystring.stringify({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    state: state,
    scope: scope,
  });

  // This is the auth url. transfer to Spotify Login
  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
};

module.exports = initiateLogin;
