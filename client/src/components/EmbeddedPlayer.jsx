import { useEffect } from "react";

const EmbeddedPlayer = () => {
  useEffect(() => {
    const loadSpotifyEmbed = () => {
      const element = document.getElementById("embed-iframe");
      const options = {
        width: "100%",
        height: "400",
        uri: "spotify:playlist:2RoQkVgIhgQmCZadrMoDLd",
      };

      const callback = (EmbedController) => {
        document.querySelectorAll(".tracks").forEach((track) => {
          track.addEventListener("click", () => {
            EmbedController.pause();
            EmbedController.loadUri(track.dataset.spotifyId);
          });
        });
      };

      window.onSpotifyIframeApiReady = (IFrameAPI) => {
        IFrameAPI.createController(element, options, callback);
      };
    };

    // Loading the Spotify Embed API script
    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    script.onload = loadSpotifyEmbed;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.onSpotifyIframeApiReady;
    };
  }, []);

  return (
    <div>
      <div className="playlist">
        <span
          className="playlist"
          data-spotify-id="spotify:playlist:2RoQkVgIhgQmCZadrMoDLd"
        >
          My First Playlist
        </span>
      </div>

      <div id="embed-iframe"></div>
    </div>
  );
};

export default EmbeddedPlayer;
