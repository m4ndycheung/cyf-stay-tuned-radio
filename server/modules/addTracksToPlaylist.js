const addTracksToPlaylist = async function (access_token, addTracksArray) {
  const playlistID = "7ML1iO1h2gFyjwYUkzcOGK";

  const addTracksRequest = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        // We'll create this array when we extract song IDs from the DB
        uris: addTracksArray,
      }),
    }
  );
  const trackResponse = await addTracksRequest.json();
  console.log(trackResponse);
  return trackResponse;
};

module.exports = addTracksToPlaylist;
