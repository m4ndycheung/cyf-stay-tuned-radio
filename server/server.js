require("dotenv").config();
const express = require("express");
const initiateLogin = require("./modules/initiateLogin");
const getAccessAndRefreshTokens = require("./modules/getAccessAndRefreshTokens");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/login", initiateLogin);
app.get("/callback", getAccessAndRefreshTokens);
