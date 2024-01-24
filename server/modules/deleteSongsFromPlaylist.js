async function deleteSongsFromPlaylist(playlist_id, access_token) {
    data = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${access_token}`,
            "Content-Type": "application/json"
        }
    })
}