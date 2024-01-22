const express = require("express");

const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/getSpotifyToken", (req, res) => {
  const spotifyApiUrl = "https://accounts.spotify.com/api/token";
  const clientId = process.env.client_id;
  const clientSecret = process.env.client_secret;

  const dataToSend = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const request = https.request(spotifyApiUrl, options, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      try {
        const jsonData = JSON.parse(data);
        res.json({ access_token: jsonData.access_token });
      } catch (error) {
        console.error("Error parsing Spotify API response:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  });

  request.on("error", (error) => {
    console.error("Error making Spotify API request:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  });

  request.write(dataToSend);
  request.end();
});
