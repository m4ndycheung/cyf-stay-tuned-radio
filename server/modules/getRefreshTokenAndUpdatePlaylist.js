const deleteAllTracksFromSpotifyPlaylist = require("./deleteAllTracksFromSpotifyPlaylist");
const addTracksToPlaylist = require("./addTracksToPlaylist");
const exchangeRefreshForAccessToken = require("./exchangeRefreshForAccessToken");

// /update route
const getRefreshAndUpdatePlaylist = async function (req, res) {
  // calling the /refresh_token endpoint to call the function to get the access and refresh tokens
  const serverURL = process.env.SERVER_URL;
  // replaced fetch call to endpoint with imported function
  const newAccessToken = await exchangeRefreshForAccessToken();

  console.log(`NEWWWWWWWWW access token: ${newAccessToken}`);

  // API call to delete tracks from yesterday's spotify playlist
  const playlistID = process.env.SPOTIFY_PLAYLIST_ID;
  deleteAllTracksFromSpotifyPlaylist(newAccessToken, playlistID);

  // API call to add tracks randomly selected from db to spotify playlist
  const getRandomSongs = await fetch(`${serverURL}/songs/random`);
  const randomSongs = await getRandomSongs.json();
  addTracksToPlaylist(newAccessToken, randomSongs, playlistID);
  res.send({
    message: `Boop. Playlist Updated. Link: https://open.spotify.com/playlist/${playlistID}`,
  });
};

module.exports = getRefreshAndUpdatePlaylist;

// we are calling the end points and not the functions themselves as we need it in an array format which is then translated into a .json format - which is the necessary format for the fetch response
