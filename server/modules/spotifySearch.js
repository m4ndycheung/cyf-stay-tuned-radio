const querystring = require("querystring");

const searchForSongsOnSpotify = async function (req, res) {
  //calling the /refresh_token endpoint to call the function to get the access and refresh tokens
  const serverURL = process.env.server_url;
  const requestRefreshToken = await fetch(`${serverURL}/refresh_token`);
  const newTokenObject = await requestRefreshToken.json();
  const newAccessToken = newTokenObject.access_token;

  // destructured req.query to get these params
  const { q, type, limit } = req.query;

  // querystring places params into a neat string
  const queryParams = querystring.stringify({
    q: q,
    type: type,
    limit: limit,
  });

  // queryParams to look something like (if searching for songs):
  // q=japanesebreakfast&type=track&limit=5

  console.log(queryParams);

  // GET request containing query params and access token
  const searchRequest = await fetch(
    `https://api.spotify.com/v1/search?${queryParams}`,
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
  console.log(searchItems);

  // function to loop through items and pushes uri's into an array
  function getTrackURIs(data) {
    const uriArray = [];

    for (const item of data) {
      uriArray.push(item.uri);
    }
    return uriArray;
  }

  // call the getTrackURIs function
  const trackURIs = getTrackURIs(searchItems);

  res.send(trackURIs);
};
module.exports = searchForSongsOnSpotify;
