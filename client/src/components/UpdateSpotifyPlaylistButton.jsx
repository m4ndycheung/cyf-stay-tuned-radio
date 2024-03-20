const UpdateSpotifyPlaylistButton = ({ userRole }) => {
  const backend_server = import.meta.env.VITE_SERVER_URL;

  async function handleClickSpotifyUpdate() {
    if (userRole === "admin" || userRole === "basic") {
      const updateSpotifyRequest = await fetch(`${backend_server}/update`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("workspaceToken")}`,
        },
      });
      const updateSpotifyResponse = await updateSpotifyRequest.json();
      alert(updateSpotifyResponse.message);
    } else {
      alert("You are not Logged in");
    }
  }
  return (
    <>
      <button className="btn btn-success" onClick={handleClickSpotifyUpdate}>
        Update Spotify Playlist
      </button>
    </>
  );
};

export default UpdateSpotifyPlaylistButton;
