const SpotifyFirstRunButton = () => {
  const backend_server = import.meta.env.VITE_SERVER_URL;

  async function handleClickSpotifyFirstRun() {
    console.log(sessionStorage.getItem("workspaceToken"));
    const getSpotifyAuthorisationURLRequest = await fetch(
      `${backend_server}/login`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("workspaceToken")}`,
        },
      }
    );
    const spotifyAuthorisationResponse =
      await getSpotifyAuthorisationURLRequest.json();
    const getSpotifyAuthorisationURL = spotifyAuthorisationResponse.link;
    open(getSpotifyAuthorisationURL);
  }
  return (
    <button className="btn btn-warning" onClick={handleClickSpotifyFirstRun}>
      Get Access and Refresh Token
    </button>
  );
};

export default SpotifyFirstRunButton;
