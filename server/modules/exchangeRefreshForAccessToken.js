var request = require("request");
const { Pool } = require("pg");

// refresh_token route expects a refresh_token query parameter, sends a POST request to Spotify's token endpoint with the refresh token, and responds with the new access and refresh tokens

const exchangeRefreshForAccessToken = async function (req, res) {
  var CLIENT_ID = process.env.CLIENT_ID;
  var CLIENT_SECRET = process.env.CLIENT_SECRET;
  console.log("CLIENT_ID from variable:", CLIENT_ID);

  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: true,
  });
  console.log("DB_USER from variable:", process.env.DB_USER);

  // get refresh token from DB
  pool.query(
    "SELECT refresh_token FROM refresh_tokens_table LIMIT 1",
    (error, result) => {
      if (error) {
        return res.status(500).send({ error: "FAILED to get refresh token" });
      }

      const storedRefreshToken = result.rows[0];

      if (!storedRefreshToken) {
        return res.status(400).send({ error: "No refresh token found in DB" });
      }

      var authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
          Authorization:
            "Basic " +
            new Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
        },
        form: {
          grant_type: "refresh_token",
          refresh_token: storedRefreshToken.refresh_token,
        },
        json: true,
      };

      request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          // now take the refresh token which is stored in DB and save THAT as the refresh token to be used in the next steps
          var refresh_token = storedRefreshToken.refresh_token;

          console.log(`NEW ACCESS TOKEN: ${body.access_token}`);
          console.log(
            `DB STORED REFRESH TOKEN: ${storedRefreshToken.refresh_token}`
          );

          res.send({
            access_token: body.access_token,
            refresh_token: refresh_token,
          });
        } else {
          res
            .status(response.statusCode)
            .send({ error: "Failed to refresh token" });
        }
      });
    }
  );
};

module.exports = exchangeRefreshForAccessToken;
