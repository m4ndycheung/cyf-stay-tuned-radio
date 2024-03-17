const db = require("../data/database.js");
const extractSpotifyId = require("../spotify/util.js");

const apiCallToAddSongsToDB = function (req, res) {
  const artist_name = req.body.artist;
  const song_name = req.body.song_title;
  const spotify_url = req.body.spotify_url;
  const spotify_song_id = extractSpotifyId(spotify_url);
  const query = `INSERT INTO tracks (artist_name, song_name, spotify_song_id) VALUES ($1, $2, $3)`;

  db.query(query, [artist_name, song_name, spotify_song_id])
    .then(() => {
      res.status(201).send({
        result: "success",
        message: `${song_name} by ${artist_name} added successfully!`,
      });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(400)
        .send({ result: "failure", message: "Song could not be added." });
    });
};

module.exports = apiCallToAddSongsToDB;
