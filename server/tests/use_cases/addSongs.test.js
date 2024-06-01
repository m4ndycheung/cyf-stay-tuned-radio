const request = require("supertest");
const app = require("../../server.js");

test("songs add sending duplicate song should return 400 status", async () => {
  const result = await request(app)
    .post("/songs/add")
    .send({
      artist: "john",
      song_title: "My sad boring name",
      spotify_url: "https://open.spotify.com/track/5ChkMS8OtdzJeqyybCc9R5",
    })
    .set("Accept", "application/json");
  expect(result.statusCode).toEqual(201);
});
