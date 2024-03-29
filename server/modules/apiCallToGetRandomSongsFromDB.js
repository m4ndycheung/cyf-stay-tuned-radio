const selectRandomFromList = require("./selectRandomFromList.js");

const apiCallToGetRandomSongsFromDB = async function (req, res) {
  const server_url = process.env.SERVER_URL;
  // waits for a fetch call to the database to be completed
  const requestSongs = await fetch(`${server_url}/songs`);
  // waits for response of the fetch call above and stores the data (songs array) in an array called songsData
  const songsData = await requestSongs.json();
  // call selectRandomFromList function with songsData array and set the returned array data as randomSongs
  randomSongs = selectRandomFromList(songsData, 5);
  res.send(randomSongs);
};

module.exports = apiCallToGetRandomSongsFromDB;
