const deleteTracksFromPlaylist = async function (access_token, playlist_id, snapshot_id, deleteTracksArray) {
    const deleteTracksRequest = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${access_token}`,
            "Content-Type": "application/json"
        },
        //body content needs to match Content-Type stated in the headers section
        //tracks parameter is an array of objects which includes uri of the tracks (in form of {spotify:track:track_id})
        //snapshot_id is a version identifier for playlists and changes with each modification
        body: JSON.stringify({
            tracks: deleteTracksArray,
            snapshot_id: snapshot_id
        })
    })
    const deleteTracksResponse = await deleteTracksRequest.json()
    return deleteTracksResponse
}

module.exports = deleteTracksFromPlaylist