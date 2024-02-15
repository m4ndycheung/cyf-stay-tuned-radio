const request = require("supertest");
const app = require("../../server.js");
const db = require("../../data/database.js");
const { expect } = require("code");

test("expect true to be false", async () => {
  const result = await request(app)
    .post("/songs/add")
    .send({
      artist: "john",
      song_title: "My sad boring name",
      spotify_url: "https://open.spotify.com/track/5ChkMS8OtdzJeqyybCc9R5",
    })
    .set("Accept", "application/json");
  expect(result.statusCode).equal(201);
  const databaseResult = await db.query(
    "SELECT song_name, artist_name, spotify_song_id FROM tracks WHERE spotify_song_id = '5ChkMS8OtdzJeqyybCc9R5' "
  );
  expect(databaseResult.rowCount).equal(1);
});
