function EmbeddedPlayer() {
  return (
    <>
      <iframe
        style={{ borderRadius: 12 + "px" }}
        src="https://open.spotify.com/embed/playlist/2RoQkVgIhgQmCZadrMoDLd?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
}

export default EmbeddedPlayer;
