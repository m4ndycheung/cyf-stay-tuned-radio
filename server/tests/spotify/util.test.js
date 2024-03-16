const extractSpotifyId = require("../../spotify/util.js");

test("extract id from url", () => {
  spotifyUrl = "https://open.spotify.com/track/6FHUBs8P5qcjpj7C2QHdEq";

  const song_id = extractSpotifyId(spotifyUrl);
  expect(song_id).toBe("6FHUBs8P5qcjpj7C2QHdEq");
});
