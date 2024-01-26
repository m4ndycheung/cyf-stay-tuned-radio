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
          "spotify:track:0zjB7ewBWnMgQDMQpFzt92",
          "spotify:track:7Gjj6NxSsVwXfOXUjvjCXv",
          "spotify:track:3dxiWIBVJRlqh9xk144rf4",
          "spotify:track:7KXjTSCq5nL1LoYtL7XAwS",
          "spotify:track:1LJrvnqxW78EIevakMEpZa",
          "spotify:track:7IUl5c6u18rzmyQOblj10T",
        ],
      }),
    }
  );
  const trackResponse = await addTracksRequest.json();
  console.log(trackResponse);
};

module.exports = addTracksToPlaylist;
