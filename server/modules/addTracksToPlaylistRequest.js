const addTracksToPlaylist = async function (access_token) {
  const addTracksRequest = await fetch(
    `https://api.spotify.com/v1/playlists/7ML1iO1h2gFyjwYUkzcOGK/tracks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};

module.exports = addTracksToPlaylist;
