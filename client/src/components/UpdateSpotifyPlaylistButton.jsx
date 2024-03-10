const UpdateSpotifyPlaylistButton = () => {
  const backend_server = import.meta.env.VITE_SERVER_URL;

  async function handleClickSpotifyUpdate() {
    const updateSpotifyRequest = await fetch(`${backend_server}/update`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("maciToken")}`,
      },
    });
    const updateSpotifyResponse = await updateSpotifyRequest.json();
    alert(updateSpotifyResponse.message);
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
