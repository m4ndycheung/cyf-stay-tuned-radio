const { Pool } = require("pg");

const db = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: true,
});

const apiCallToGetSongsFromDB = function (req, res) {
  db.query(
    "SELECT song_name, artist_name, song_genre, spotify_song_id FROM tracks"
  )
    .then((result) => {
      console.log(result.rows);
      res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = apiCallToGetSongsFromDB;
