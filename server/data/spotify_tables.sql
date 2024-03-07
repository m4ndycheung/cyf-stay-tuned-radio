DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS refresh_tokens_table;

CREATE TABLE tracks (
  id                    SERIAL PRIMARY KEY,
  song_name             VARCHAR(255) NOT NULL,
  artist_name           VARCHAR(255) NOT NULL,
  cyf_slack_username    VARCHAR(255),
  song_genre            VARCHAR(255),
  spotify_song_id       VARCHAR(50) NOT NULL
);

CREATE TABLE refresh_tokens_table (
  id                    SERIAL PRIMARY KEY,
  refresh_token         VARCHAR NOT NULL
);

INSERT INTO tracks (song_name, artist_name, spotify_song_id) VALUES ('Private Presley', 'Peach Pit', '40d4m1eI0erCRKLXz55RtT' );
INSERT INTO tracks (song_name, artist_name, spotify_song_id) VALUES ('Concerning Hobbits', 'Howard Shore', '644es5aYPJghtZLjM1rmSP' );
INSERT INTO tracks (song_name, artist_name, spotify_song_id) VALUES ('Machinist', 'Japanese Breakfast', '13FGWUlqQpGugvEcnEUqou' );
INSERT INTO tracks (song_name, artist_name, spotify_song_id) VALUES ('Not Strong Enough', 'boygenius', '09DR0sHnQUhHOiSNttc1mv' );
INSERT INTO tracks (song_name, artist_name, spotify_song_id) VALUES ('This Must Be the Place (Naive Melody) - 2005 Remaster', 'Talking Heads', '6aBUnkXuCEQQHAlTokv9or' );
INSERT INTO tracks (song_name, artist_name, spotify_song_id) VALUES ('Helena', 'My Chemical Romance', '5dTHtzHFPyi8TlTtzoz1J9' );
INSERT INTO tracks (song_name, artist_name, spotify_song_id) VALUES ('Going Under', 'Evanescence', '3UygY7qW2cvG9Llkay6i1i' );
INSERT INTO tracks (song_name, artist_name, spotify_song_id) VALUES ('What Hurts The Most', 'Cascada', '2rVa6UVT2f95l3bGcMGCWQ' );
INSERT INTO tracks (song_name, artist_name, spotify_song_id) VALUES ('Little Wing', 'Jimi Hendrix', '1Eolhana7nKHYpcYpdVcT5' );
INSERT INTO tracks (song_name, artist_name, spotify_song_id) VALUES ('Everywhere', 'Fleetwood Mac', '1prZ0pr6XoRCxcrC3MCL0M' );