require("dotenv").config();
const express = require("express");
const cors = require("cors");
const initiateLogin = require("./modules/initiateLogin");
const getAccessAndRefreshTokens = require("./modules/getAccessAndRefreshTokens");
const apiCallToGetSongsFromDb = require("./modules/apiCallToGetSongsFromDb");
const apiCallToAddSongsToDB = require("./modules/apiCallToAddSongsToDB")

const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.get("/login", initiateLogin);
app.get("/callback", getAccessAndRefreshTokens);
app.get("/", apiCallToGetSongsFromDb);
app.post("/songs/add", apiCallToAddSongsToDB)