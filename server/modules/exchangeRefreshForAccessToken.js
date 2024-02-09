var request = require("request");
const { Pool } = require("pg");

// refresh_token route expects a refresh_token query parameter, sends a POST request to Spotify's token endpoint with the refresh token, and responds with the new access and refresh tokens

const exchangeRefreshForAccessToken = async function (req, res) {
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  // console.log("CLIENT_ID from variable:", CLIENT_ID);

  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: true,
  });

  const result = await pool.query(
    "SELECT refresh_token FROM refresh_tokens_table LIMIT 1"
  );

  const storedRefreshToken = result.rows[0];
  console.log(storedRefreshToken);

  if (!storedRefreshToken) {
    throw new Error("No refresh token found in DB");
  }

  const apiURL = "https://accounts.spotify.com/api/token";
  const authOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: storedRefreshToken.refresh_token,
    }),
  };

  const response = await fetch(apiURL, authOptions);

  const responseBody = await response.json();
  console.log(responseBody);

  const accessToken = responseBody.access_token;

  return accessToken;
};

module.exports = exchangeRefreshForAccessToken;
