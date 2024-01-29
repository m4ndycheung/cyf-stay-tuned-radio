const createDeleteTracksArray = function (tracksArrayInput) {
    const deleteTracksArray = [];
    tracksArrayInput.map((track) => {
        const trackObject = {}
        trackObject.uri = track.track.uri
        deleteTracksArray.push(trackObject)
    })
    return deleteTracksArray
}

module.exports = createDeleteTracksArray