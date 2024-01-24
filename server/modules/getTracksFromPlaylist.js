const getTracksFromPlaylist = async function (access_token, playlist_id) {
    const getTracksRequest = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      });
  }