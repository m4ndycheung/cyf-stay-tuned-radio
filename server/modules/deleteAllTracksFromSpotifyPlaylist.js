import getTracksFromPlaylist from "./getTracksFromPlaylist";

const deleteAllTracksFromSpotifyPlaylist = async function(access_token, track_id) {
    const playlistTrackArray = await getTracksFromPlaylist(access_token, track_id)
}