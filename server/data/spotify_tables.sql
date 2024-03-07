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