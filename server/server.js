require("dotenv").config();
const express = require("express");
const cors = require("cors");
const initiateLogin = require("./modules/initiateLogin");
const getAccessAndRefreshTokens = require("./modules/getAccessAndRefreshTokens");
const apiCallToAddSongsToDB = require("./modules/apiCallToAddSongsToDB");
const apiCallToGetSongsFromDB = require("./modules/apiCallToGetSongsFromDB");
const exchangeRefreshForAccessToken = require("./modules/exchangeRefreshForAccessToken");
const authenticationWithSlack = require("./modules/authenticationWithSlack");
const exchangeAccessCodeWithSlack = require("./modules/exchangeAccessCodeWithSlack");
const getRefreshAndUpdatePlaylist = require("./modules/getRefreshTokenAndUpdatePlaylist");
const searchForSongsOnSpotify = require("./modules/spotifySearch");
const jwt = require("jsonwebtoken");

const database = [
  {
    name: "gfg",
    work: "knowledge provider",
    password: "abc",
  },
  {
    name: "suryapratap",
    work: "technical content writer",
    password: "123",
  },
];

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
app.post("/songs/add", apiCallToAddSongsToDB);
app.get("/songs", apiCallToGetSongsFromDB);
app.get("/songs/random", apiCallToGetRandomSongsFromDB);
app.get("/refresh_token", exchangeRefreshForAccessToken);
app.get("/slack-sign-in", authenticationWithSlack);
app.get("/slack/oauth_redirect", exchangeAccessCodeWithSlack);
app.get("/update", getRefreshAndUpdatePlaylist);
app.get("/search", searchForSongsOnSpotify);

app.get("/jwt", (req, res) => {
  res.json({
    route: "/jwt",
    authentication: false,
  });
});

const JWTSecret = "stringUsedToEncodeAndDecodeJWTs";

app.get("/jwt/authorise", (req, res) => {
  const token = jwt.sign(database[0], JWTSecret);
  // console.log(`this is jwt token: ${token}`);
  // sessionStorage.setItem("token", token);
  res.redirect(`http://localhost:5173?token=${token}`);
});

app.get("/jwt/authorise/check", (req, res) => {
  const token = req.body.token;
  const decode = jwt.verify(token, JWTSecret);
  res.send(decode);
});
