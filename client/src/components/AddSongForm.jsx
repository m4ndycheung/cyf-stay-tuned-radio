import { useState } from "react";
import FormTextInput from "./FormTextInput";
import Collapse from "react-bootstrap/Collapse";
import "./AddSongForm.css";
import SearchResultCard from "./SearchResultCard";

export default function AddSongForm() {
  const [formData, setFormData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const server_url = import.meta.env.VITE_SERVER_URL;

  // function handleChangeEventFormInput(key, value) {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [key]: value,
  //     };
  //   });
  // }

  async function handleSearch(event) {
    event.preventDefault();
    console.log("clicked");
    console.log(searchQuery);
    const searchRequest = await fetch(
      `${server_url}/search?query=${searchQuery}`
    );
    const searchResponse = await searchRequest.json();
    // console.log(searchResponse);

    setSearchResults(searchResponse);
  }

  function renderSearchResults(results) {
    return results.map((item) => (
      <SearchResultCard
        key={item.songURI}
        trackName={item.trackName}
        artistName={item.artistName}
        songURI={item.songURI}
        imageURL={item.imageURL}
      />
    ));
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
          <form className="m-2 p-3">
            <div>
              <FormTextInput
                inputName="Search Query"
                inputID="search-query"
                handleChangeEventFormInput={setSearchQuery}
              />

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

            <div className="search-results-container">
              {renderSearchResults(searchResults)}
            </div>

            {/* <button
              type="submit"
              className="btn btn-primary"
              onClick={submitFormData}
            >
              Submit
            </button> */}
          </form>
        </Collapse>
      </div>
    </>
  );
}
