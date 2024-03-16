import React from "react";

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
