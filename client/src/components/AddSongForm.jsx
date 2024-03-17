import { useState } from "react";
import FormTextInput from "./FormTextInput";
import Collapse from "react-bootstrap/Collapse";
import "./AddSongForm.css";
import SearchResultCard from "./SearchResultCard";

export default function AddSongForm() {
  const [formData, setFormData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState("");
  const server_url = import.meta.env.VITE_SERVER_URL;

  // To view formData as there is some lag with storing the data - import useEffect to test
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  // sends searchQuery to backend then sets the search results in useState
  async function handleSearch(event) {
    event.preventDefault();
    const searchRequest = await fetch(
      `${server_url}/search?query=${searchQuery}`
    );
    const searchResponse = await searchRequest.json();

    setSearchResults(searchResponse);
  }

  // maps over searchResults (the results object returned by Spotify API) and renders result cards using each item in the array
  // whenever the searchResults is updated, component will re-render results
  // if selectedResult matches item.songURI, it will return true i.e. the card's selected and class will be applied in the component
  function renderSearchResults(results) {
    return results.map((item) => (
      <SearchResultCard
        key={item.songURI}
        trackName={item.trackName}
        artistName={item.artistName}
        songURI={item.songURI}
        imageURL={item.imageURL}
        isSelected={selectedResult === item.songURI}
        onClick={handleCardClick}
      />
    ));
  }

  // setsSelectedResult stores the song URI so that it can be compared in the SearchResultCard
  // stores song data in setFormData when the result is selected
  function handleCardClick(trackName, artistName, songURI, imageURL) {
    setSelectedResult(songURI);

    setFormData({
      song_title: trackName,
      artist: artistName,
      spotify_url: songURI,
      imageURL: imageURL,
    });
  }

  // Refactor fetch call to add songs so the JWT token is sent together with the POST request - REQUIREMENT
  async function submitFormData(event) {
    event.preventDefault();
    const sendSongsToDB = await fetch(`${server_url}/songs/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("workspaceToken")}`,
      },
      body: JSON.stringify(formData),
    });
    const response = await sendSongsToDB.json();
    alert(response.result);
  }

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => setOpen(!open)}
        aria-controls="control-collapse-add-song-form"
        aria-expanded={open}
      >
        Add Songs
      </button>
      <div className="rounded container bg-body-tertiary">
        <Collapse in={open}>
          <form className="m-3 p-3">
            <div className="row">
              <FormTextInput
                inputName="Search Query"
                inputID="search-query"
                handleChangeEventFormInput={setSearchQuery}
              />

              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-primary "
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>

            <div className=" mb-3 search-results-container">
              {renderSearchResults(searchResults)}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitFormData}
            >
              Submit
            </button>
          </form>
        </Collapse>
      </div>
    </>
  );
}
