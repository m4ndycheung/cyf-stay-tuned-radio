const querystring = require("querystring");

const getAccessAndRefreshTokens = async function (req, res) {
  const TOKEN_URL = "https://accounts.spotify.com/api/token";
  const REDIRECT_URI = "http://localhost:3001/callback";
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const code = req.query.code || null;
  //   console.log(`client id: ${CLIENT_ID}`);

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

  const { access_token, token_type, expires_in, refresh_token, scope } =
    tokenData;

  console.log(`access token: ${access_token}`);
  console.log(`expires in: ${expires_in}`);
  console.log(`token type: ${token_type}`);
  console.log(`refresh token: ${refresh_token}`);
};

module.exports = getAccessAndRefreshTokens;
