require("dotenv").config();
const express = require("express");
const crypto = require("crypto");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const AUTH_URL = "https://accounts.spotify.com/authorize";
const TOKEN = "https://accounts.spotify.com/api/token";
const API_BASE_URL = "https://api.spotify.com/v1/";
