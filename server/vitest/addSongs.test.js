import { afterEach } from "node:test";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { addSong } from "../data/database";
import apiCallToAddSongsToDB from "../modules/apiCallToAddSongsToDB";
import request from "supertest";
import app from "../server.js";

describe("songs add", () => {
  beforeAll(() => {
    vi.mock("../data/database.js", (importOriginal) => {
      return { ...importOriginal(), addSong: vi.fn() };
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("sending a song should add to the database", async () => {
    // Arrange
    const songList = [];

    vi.mocked(addSong).mockImplementation(
      (artist_name, song_name, spotify_song_id) => {
        console.log(`hallo hens`);
        songList.push({
          artist_name: artist_name,
          song_name: song_name,
          spotify_song_id: spotify_song_id,
        });
      }
    );

    // Act
    // const result = await request(app)
    //   .post("/songs/add")
    //   .send({
    //     artist: "john",
    //     song_title: "My sad boring name",
    //     spotify_url: "https://open.spotify.com/track/5ChkMS8OtdzJeqyybCc9R5",
    //   })
    //   .set("Accept", "application/json");

    // console.log(result.body);

    const req = {
      body: {
        artist: "john",
        song_title: "My sad boring name",
        spotify_url: "https://open.spotify.com/track/5ChkMS8OtdzJeqyybCc9R5",
      },
    };

    const mockExpress = {
      send: vi.fn().mockReturnValue(true),
    };

    const res = { status: vi.fn().mockReturnValue(mockExpress) };

    const result = await apiCallToAddSongsToDB(req, res);

    console.log(result);
    // Assert
    expect(songList.length).toBe(1);
    expect(songList[0].artist).toBe("john");
  });
});
