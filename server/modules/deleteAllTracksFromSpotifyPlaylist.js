import getPlaylistData from "./getPlaylistData";
import createDeleteTrackArray from "./createDeleteTrackArray";
import deleteTracksFromPlaylist from "./deleteTracksFromPlaylist";

const deleteAllTracksFromSpotifyPlaylist = async function(access_token, playlist_id) {
    const playlistData = await getTracksFromPlaylist(access_token, playlist_id)
    const deleteArray = createDeleteTrackArray(playlistData)
}