var request = require("request");
const { Pool } = require("pg");
const deleteAllTracksFromSpotifyPlaylist = require("./deleteAllTracksFromSpotifyPlaylist");
const addTracksToPlaylist = require("./addTracksToPlaylist");

// /update route
const getRefreshAndUpdatePlaylist = async function (req, res) {
  // calling the /refresh_token endpoint to call the function to get the access and refresh tokens
  const serverURL = process.env.server_url;
  const requestRefreshToken = await fetch(`${serverURL}/refresh_token`);
  const newTokenObject = await requestRefreshToken.json();
  const newAccessToken = newTokenObject.access_token;
  console.log(`NEWWWWWWWWW access token: ${newAccessToken}`);

  // API call to delete tracks from yesterday's spotify playlist
  const playlistID = process.env.playlist_id;
  deleteAllTracksFromSpotifyPlaylist(newAccessToken, playlistID);

  // API call to add tracks randomly selected from db to spotify playlist
  const getRandomSongs = await fetch(`${serverURL}/songs/random`);
  const randomSongs = await getRandomSongs.json();
  addTracksToPlaylist(newAccessToken, randomSongs, playlistID);
};

module.exports = getRefreshAndUpdatePlaylist;
