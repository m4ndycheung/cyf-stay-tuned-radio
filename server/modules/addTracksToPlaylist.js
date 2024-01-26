// To test this function, we need an addTracksArray
// We also need to require this function in getAccessAndRefreshTokens
// Then invoke the function passing through the access_token

const addTracksToPlaylist = async function (access_token, addTracksArray) {
  const playlistID = "7ML1iO1h2gFyjwYUkzcOGK";

  // API call to Spotify requesting to add songs to a specific playlist
  const addTracksRequest = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      // JSON.stringify is needed to ensure the uris data is formattted as a JSON string
      // addTracksArray will be created in another function when we extract random song IDs from the DB
      body: JSON.stringify({
        uris: addTracksArray,
      }),
    }
  );

  // Waiting for a response from Spotify
  const trackResponse = await addTracksRequest.json();

  // If Spotify is happy, we'll get a snapshot_id as a response
  console.log(trackResponse);
  return trackResponse;
};

module.exports = addTracksToPlaylist;
