const { Pool } = require("pg");

const db = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: true,
});

const apiCallToGetRandomSongsFromDB = function (req, res) {
  db.query("SELECT * FROM tracks")
    .then((result) => {
      const data = result.rows;

      const selectRandomFromList = function (inputArray, amount) {
        const randomList = [];
        for (let i = 0; randomList.length < amount; i++) {
          const randomNum = Math.floor(Math.random() * inputArray.length);
          if (!randomList.includes(inputArray[randomNum])) {
            randomList.push(inputArray[randomNum]);
          }
        }

        //  The array should look like this:
        //  ["Spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"]
        const trackIDsToAddArray = [];

        randomList.map((item) => {
          const newString = `Spotify:track:${item.spotify_song_id}`;
          trackIDsToAddArray.push(newString);
        });
        console.log(`hello`);
        console.log(trackIDsToAddArray);
        return trackIDsToAddArray;
      };

      selectRandomFromList(data, 3);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = apiCallToGetRandomSongsFromDB;
