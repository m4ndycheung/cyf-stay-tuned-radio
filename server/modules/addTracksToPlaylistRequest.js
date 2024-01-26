const addTracksToPlaylist = async function (access_token) {
  const addTracksRequest = await fetch(
    `https://api.spotify.com/v1/playlists/7ML1iO1h2gFyjwYUkzcOGK/tracks`
  );
};

module.exports = addTracksToPlaylist;
