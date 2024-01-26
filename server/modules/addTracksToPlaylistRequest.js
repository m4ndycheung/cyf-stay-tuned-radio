const addTracksToPlaylist = async function (access_token) {
  const addTracksRequest = await fetch(
    `https://api.spotify.com/v1/playlists/7ML1iO1h2gFyjwYUkzcOGK/tracks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        uris: [
          "spotify:track:7m9XR7FquXLP1FewdAcNS9",
          "spotify:track:0Rr9HxnTEnYd8apQ4abMPx",
          "spotify:track:5Tu7E5l3Czv6APtGkAsLv4",
          "spotify:track:67MoDnJtywQsAS6Bovvuon",
          "spotify:track:5gw8HNcrqliEw0X6pPrPvG",
        ],
      }),
    }
  );
};

module.exports = addTracksToPlaylist;
