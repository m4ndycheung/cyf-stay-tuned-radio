const querystring = require("querystring");
const { access } = require("fs");

const getAccessAndRefreshTokens = async function (req, res) {
  const TOKEN_URL = "https://accounts.spotify.com/api/token";
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const code = req.query.code || null;

  const tokenResponse = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    body: querystring.stringify({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: REDIRECT_URI,
    }),
  });
  const tokenData = await tokenResponse.json();

  // object destructuring to easily access object data
  const { access_token, token_type, expires_in, refresh_token, scope } =
    tokenData;

  console.log(access_token);
  console.log(refresh_token);

  res.send(tokenData);
};

module.exports = getAccessAndRefreshTokens;
