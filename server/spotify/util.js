function extractSpotifyId(url) {
  console.log(url);
  const re = /(?!track:)([a-zA-Z0-9]){22}/;
  const spotify_song_id = re.exec(url)[0];
  return spotify_song_id;
}

module.exports = extractSpotifyId;
