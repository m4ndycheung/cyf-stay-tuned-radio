const querystring = require("querystring");
const { Pool } = require("pg");


const getAccessAndRefreshTokens = async function (req, res) {
  const TOKEN_URL = "https://accounts.spotify.com/api/token";
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const code = req.query.code || null;

  // db connection
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: true,
  });

  // store the refresh token in DB instead of console logging it
  const storeRefreshTokenInDB = async function (refresh_token) {
    pool.query(
      "UPDATE refresh_tokens_table SET refresh_token = $1 WHERE id = 1",
      [refresh_token],
      (error, result) => {
        if (error) {
          console.error("ERROR storing refresh token in DB:", error);
        } else {
          console.log("A-OK - Refresh token stored/updated in DB!");
        }
      }
    );
  };

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

  // store refresh token in DB
  storeRefreshTokenInDB(refresh_token);

  res.send(tokenData);
};

module.exports = getAccessAndRefreshTokens;
