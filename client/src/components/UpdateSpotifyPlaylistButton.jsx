const UpdateSpotifyPlaylistButton = () => {
  function test() {
    console.log("Clicked");
  }
  return (
    <>
      <button className="btn btn-primary" onClick={test}>
        Update Spotify Playlist
      </button>
    </>
  );
};

export default UpdateSpotifyPlaylistButton;
