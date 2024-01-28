const apiCallToGetRandomSongsFromDB = async function(req, res) {
    const server_url = process.env.server_url
    // waits for a fetch call to the database to be completed
    const requestSongs = await fetch(`${server_url}/songs`)
    // waits for response of the fetch call above and stores the data (songs array) in an array called songsData
    const songsData = await requestSongs.json() 
    res.send(songsData)
}

module.exports = apiCallToGetRandomSongsFromDB