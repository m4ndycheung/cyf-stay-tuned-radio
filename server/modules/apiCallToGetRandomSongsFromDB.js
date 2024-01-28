const apiCallToGetRandomSongsFromDB = async function(req, res) {
    const server_url = process.env.server_url
    const requestSongs = await fetch(`${server_url}/songs`)
    const songsData = await requestSongs.json()
    res.send(songsData)
}

module.exports = apiCallToGetRandomSongsFromDB