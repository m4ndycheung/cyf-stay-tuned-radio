import getTracksFromPlaylist from "./getTracksFromPlaylist";
import createDeleteTrackArray from "./createDeleteTrackArray";

const deleteAllTracksFromSpotifyPlaylist = async function(access_token, track_id) {
    const playlistTrackArray = await getTracksFromPlaylist(access_token, track_id)
    const deleteArray = createDeleteTrackArray(playlistTrackArray)
}