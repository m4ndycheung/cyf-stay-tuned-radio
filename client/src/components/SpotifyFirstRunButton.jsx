const SpotifyFirstRunButton = () => {
  function handleClickSpotifyFirstRun() {
    alert("Clicked");
  }
  return (
    <button className="btn btn-primary" onClick={handleClickSpotifyFirstRun}>
      Button
    </button>
  );
};

export default SpotifyFirstRunButton;
