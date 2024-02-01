const { Pool } = require("pg");

const apiCallToAddSongsToDB = function(req, res) {
    const db = new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        ssl: true,
      });

      const artist = req.body.artist
      const song_title = req.body.song_title
      const spotify_url = req.body.spotify_url

    console.log(artist, song_title, spotify_url)
    res.send(artist, song_title, spotify_url)
}

module.exports = apiCallToAddSongsToDB