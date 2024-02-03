const searchForSongsOnSpotify = async function (req, res) {
  //calling the /refresh_token endpoint to call the function to get the access and refresh tokens
  const serverURL = process.env.server_url;
  const requestRefreshToken = await fetch(`${serverURL}/refresh_token`);
  const newTokenObject = await requestRefreshToken.json();
  const newAccessToken = newTokenObject.access_token;

  // destructured req.query to get the query params which will be sent from FE search bar
  const { query } = req.query;

  console.log(query);

  // query to look something like (if searching for songs):
  // q=japanesebreakfast&type=track&limit=5

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

  // spotify returns a response that looks wild
  // .json() parses the response into a JS object
  const searchResponse = await searchRequest.json();

  // extract items array from tracks
  const searchItems = searchResponse.tracks.items;
  // console.log(searchItems);

  // function to loop through items and pushes uri's into an array
  function getTrackURIs(data) {
    const uriArray = [];

    for (const item of data) {
      console.log(`song name: ${item.name}`);
      console.log(`artist name: ${item.artists[0].name}`);
      console.log(`song uri: ${item.uri}`);
      console.log(`smol image url: ${item.album.images[2].url}`);
      uriArray.push(item.uri);
    }
    return uriArray;
  }

  // call the getTrackURIs function
  const trackURIs = getTrackURIs(searchItems);

  // we can use the data that comes back to populate the results with (songs / artist name / album art etc / id (info we need for the DB))

  res.send(searchItems);
};
module.exports = searchForSongsOnSpotify;
