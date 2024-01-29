const getPlaylistData = require("./getPlaylistData");
const createDeleteTracksArray = require("./createDeleteTracksArray");
const deleteTracksFromPlaylist = require("./deleteTracksFromPlaylist");

const deleteAllTracksFromSpotifyPlaylist = async function(access_token, playlist_id) {
    const playlistData = await getPlaylistData(access_token, playlist_id)
    const snapshot_id = playlistData.snapshot_id
    const tracksArray = playlistData.tracks.items
    const deleteArray = createDeleteTracksArray(tracksArray)
    const deleteAllTracksRequest = await deleteTracksFromPlaylist(access_token, playlist_id, snapshot_id, deleteArray)
    const deleteAllTracksResponse = await deleteAllTracksRequest
    return deleteAllTracksResponse
}

module.exports = deleteAllTracksFromSpotifyPlaylist