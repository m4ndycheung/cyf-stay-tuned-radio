const getPlaylistData = async function (access_token, playlist_id) {
    const getPlaylistRequest = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      });
      const getPlaylistResponse = await getPlaylistRequest.json();
      return getPlaylistResponse
  }

  module.exports = getPlaylistData