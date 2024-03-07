const crypto = require("crypto");
const querystring = require("querystring");

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;

const initiateLogin = function (req, res) {
  console.log("login reached");
  const generateRandomString = (length) => {
    return crypto.randomBytes(60).toString("hex").slice(0, length);
  };

  const stateKey = "spotify_auth_state";

  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope =
    "user-read-private user-read-email playlist-read-private playlist-modify-private playlist-modify-public";

  const queryParams = querystring.stringify({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    state: state,
    scope: scope,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
};

module.exports = initiateLogin;
