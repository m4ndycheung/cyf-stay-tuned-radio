require("dotenv").config();
const express = require("express");
const initiateLogin = require("./modules/initiateLogin");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

// add login function here
app.get("/login", initiateLogin);
