require("dotenv").config();
const express = require("express");
const cors = require("cors");
const initiateLogin = require("./modules/initiateLogin");
const getAccessAndRefreshTokens = require("./modules/getAccessAndRefreshTokens");
const apiCallToGetSongsFromDB = require("./modules/apiCallToGetSongsFromDB");
const exchangeRefreshForAccessToken = require("./modules/exchangeRefreshForAccessToken");
const authenticationWithSlack = require("./modules/authenticationWithSlack");
const exchangeAccessCodeWithSlack = require("./modules/exchangeAccessCodeWithSlack");

const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");

const dotenv = require("dotenv");
const apiCallToGetRandomSongsFromDB = require("./modules/apiCallToGetRandomSongsFromDB");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/login", initiateLogin);
app.get("/callback", getAccessAndRefreshTokens);
app.get("/songs", apiCallToGetSongsFromDB);
app.get("/songs/random", apiCallToGetRandomSongsFromDB);
app.get("/refresh_token", exchangeRefreshForAccessToken);
app.get("/slack-sign-in", authenticationWithSlack);
app.get("/slack-callback", exchangeAccessCodeWithSlack);
