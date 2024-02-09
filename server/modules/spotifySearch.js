const exchangeRefreshForAccessToken = require("./exchangeRefreshForAccessToken");

const searchForSongsOnSpotify = async function (req, res) {
  // calling the /refresh_token endpoint to call the function to get the access and refresh tokens
  const serverURL = process.env.server_url;

  // replaced fetch call to endpoint with imported function
  const newAccessToken = await exchangeRefreshForAccessToken();
  console.log(newAccessToken);

  // destructured req.query to get the query params which will be sent from FE search bar
  const { query } = req.query;

  // console.log(query);

  // query to look something like (if searching for songs):
  // q=japanesebreakfast&type=track&limit=5
  // to test, type into browser: http://localhost:3001/search?query=yoursearchquery

  // GET request containing query params and access token
  const searchRequest = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${newAccessToken}`,
      },
    }
  );

  // Spotify returns a response that looks wild but it's basically the search results
  // .json() parses the response into a JS object
  const searchResponse = await searchRequest.json();

  console.log(searchResponse);
  // extract items array from tracks
  const searchItems = searchResponse.tracks.items;
  // console.log(searchItems);

  // this function returns relevant song data
  function getTrackSearchResults(data) {
    // an empty array where song data will be pushed to
    const trackObjectArray = [];

    // for loop goes through each item (i.e. [0],[1],[2]..) created an object to hold track data
    // pushes the object to the trackObjectArray
    for (const item of data) {
      const trackObject = {
        trackName: item.name,
        artistName: item.artists[0].name,
        songURI: item.uri,
        imageURL: item.album.images[2].url,
      };
      trackObjectArray.push(trackObject);
    }
    return trackObjectArray;
  }

  // call the getTrackSearchResults function
  const trackSearchResults = getTrackSearchResults(searchItems);

  // sends searchResults to browser --- ermagerd so cool!!
  res.send(trackSearchResults);
};

module.exports = searchForSongsOnSpotify;
