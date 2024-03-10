const UpdateSpotifyPlaylistButton = () => {
  function handleClickSpotifyUpdate() {
    console.log("Clicked");
  }
  return (
    <>
      <button className="btn btn-primary" onClick={handleClickSpotifyUpdate}>
        Update Spotify Playlist
      </button>
    </>
  );
};

export default UpdateSpotifyPlaylistButton;
