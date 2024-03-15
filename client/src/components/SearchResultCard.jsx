import React from "react";

function SearchResultCard({ key, trackName, artistName, songURI, imageURL }) {
  return (
    <div key={key}>
      {trackName} by {artistName}
    </div>
  );
}

export default SearchResultCard;
