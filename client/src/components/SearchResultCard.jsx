import React from "react";

// This is the card that will be rendered when a search has been made
// It takes various properties from the mapped array of objects in AddSongForm
function SearchResultCard({
  key,
  trackName,
  artistName,
  songURI,
  imageURL,
  isSelected,
  onClick,
}) {
  return (
    <div
      key={key}
      className={`search-result-card ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(trackName, artistName, songURI, imageURL)}
    >
      {trackName} by {artistName}
    </div>
  );
}

export default SearchResultCard;
