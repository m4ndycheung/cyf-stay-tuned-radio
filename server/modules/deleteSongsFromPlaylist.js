async function deleteSongsFromPlaylist(playlist_id) {
    data = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`)
}