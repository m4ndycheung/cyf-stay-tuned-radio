const request = require("supertest");
const app = require("../../server.js");

test("expect true to be false", () => {
  request(app)
    .post("/songs/add")
    .send({
      artist: "john",
      song_title: "My sad boring name",
      spotify_url: "https://open.spotify.com/track/6FHUBs8P5qcjpj7C2QHdEq",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        // console.log(err);
        console.log(res);
      }
    });
});
