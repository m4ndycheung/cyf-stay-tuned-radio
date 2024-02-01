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

    const artist_name = req.body.artist
    const song_name = req.body.song_title
    const spotify_url = req.body.spotify_url
    const re = /(?!track\/)([a-zA-Z0-9]){22}/
    const spotify_song_id = re.exec(spotify_url)[0]
    const query = `INSERT INTO tracks (artist_name, song_name, spotify_song_id) VALUES ($1, $2, $3)`;

    db.query(query, [artist_name, song_name, spotify_song_id])
    .then(() => {
        res.status(201).send({result: "song added successfully, enjoy!"});
      })
      .catch((err) => {
        console.log(err);
        res
          .status(400)
          .send({ result: "failure", message: "Video could not be saved" });
      });
}

module.exports = apiCallToAddSongsToDB