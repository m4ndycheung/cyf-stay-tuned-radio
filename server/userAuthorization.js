const crypto = require("crypto");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const AUTH_URL = "https://accounts.spotify.com/authorize";
const TOKEN = "https://accounts.spotify.com/api/token";
const API_BASE_URL = "https://api.spotify.com/v1/";

// LOGIN ENDPOINT
app.get("/login", function (req, res) {
  const generateRandomString = (length) => {
    return crypto.randomBytes(60).toString("hex").slice(0, length);
  };

  const stateKey = "spotify_auth_state";

  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  // go to docs to know which scopes you need
  const scope =
    "user-read-private user-read-email playlist-read-private playlist-modify-public";

  const queryParams = querystring.stringify({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    state: state,
    scope: scope,
  });

  // this is the auth url. transfer to Spotify Login
  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});
