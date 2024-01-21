const querystring = require("querystring");

const getAccessAndRefreshTokens = async function (req, res) {
  const TOKEN_URL = "https://accounts.spotify.com/api/token";
  const REDIRECT_URI = "http://localhost:3001/callback";
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
};

module.exports = getAccessAndRefreshTokens;
