const createDeleteTrackArray = function (tracksArrayInput) {
    const deleteTrackArray = [];
    tracksArrayInput.map((track) => {
        const trackObject = {}
        trackObject.uri = track.track.uri
        arrayOfObjects.push(trackObject)
    })
    return deleteTrackArray
}

module.exports = createDeleteTrackArray