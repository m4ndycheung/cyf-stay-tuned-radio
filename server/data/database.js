const { Pool } = require("pg");

const db = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: true,
});

const addSong = (artist_name, song_name, spotify_song_id) => {
  const query = `INSERT INTO tracks (artist_name, song_name, spotify_song_id) VALUES ($1, $2, $3)`;

  return db.query(query, [artist_name, song_name, spotify_song_id]).then(() => {
    return true;
  });
};

const getAllSongs = () => {
  db.query(
    "SELECT song_name, artist_name, song_genre, spotify_song_id FROM tracks"
  ).then((result) => {
    return result.rows;
  });
};

module.exports = { addSong: addSong, getAllSongs: getAllSongs };
