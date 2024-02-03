// To test this function:
// Comment out the trackIDsToAddArray and playlistID params
// Uncomment the variables after "For testing"
// Require this function in getAccessAndRefreshTokens
// Then call the function passing through the access_token (and the trackIDsToAddArray when ready)

const addTracksToPlaylist = async function (
  accessToken,
  trackIDsToAddArray,
  playlistID
) {
  // For testing:
  // const playlistID = "7ML1iO1h2gFyjwYUkzcOGK";
  // const trackIDsToAddArray = [
  //   "spotify:track:52Zr0sinhWTCRrQhRRY4EP",
  //   "spotify:track:2lnzGkdtDj5mtlcOW2yRtG",
  //   "spotify:track:5yDL13y5giogKs2fSNf7sj",
  // ];

  try {
    // API call to Spotify requesting to add songs to a specific playlist
    const addTracksRequest = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        // JSON.stringify is needed to ensure the uris data is formattted as a JSON string
        // trackIDsToAddArray will be created in another function when we extract random song IDs from the DB
        body: JSON.stringify({
          uris: trackIDsToAddArray,
        }),
      }
    );

    // Check that promise resolved
    if (!addTracksRequest.ok) {
      throw new Error(
        `Network response was not okay. Status: ${addTracksRequest.status}`
      );
    }

    // Waiting for a response from Spotify
    const trackResponse = await addTracksRequest.json();

    // If Spotify is happy, we'll get a snapshot_id as a response
    console.log(`Yiiis. Tracks have been added.`);
    console.log(trackResponse);
    return trackResponse;
  } catch (error) {
    console.error(
      `There's been a problem with the fetch operation: ${error.message}`
    );
    throw error;
  }
};

module.exports = addTracksToPlaylist;
