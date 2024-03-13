const SpotifyFirstRunButton = () => {
  const backend_server = import.meta.env.VITE_SERVER_URL;

  async function handleClickSpotifyFirstRun() {
    const getSpotifyAccessAndRefreshToken = await fetch(
      `${backend_server}/login`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("maciToken")}`,
        },
      }
    );
    const updateTokenResponse = await getSpotifyAccessAndRefreshToken.json();
    alert(updateTokenResponse.message);
  }
  return (
    <button className="btn btn-primary" onClick={handleClickSpotifyFirstRun}>
      Get Access and Refresh Token
    </button>
  );
};

export default SpotifyFirstRunButton;
