const apiCall = require("./apiCallToGetSongsFromDb");

const getRandomSongsFromDB = async function () {
  const allSongs = await apiCall();
  console.log(allSongs);
};

module.exports = getRandomSongsFromDB;
