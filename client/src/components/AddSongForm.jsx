import { useState } from "react";
import FormTextInput from "./FormTextInput";
import Collapse from "react-bootstrap/Collapse";
import "./AddSongForm.css";

export default function AddSongForm() {
  const [formData, setFormData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const server_url = import.meta.env.VITE_SERVER_URL;

  function handleChangeEventFormInput(key, value) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [key]: value,
      };
    });
  }

  async function handleSearch(event) {
    event.preventDefault();
    console.log("clicked");
  }

  // ********I will need this to submit the selected song to the DB
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
            <FormTextInput
              inputName="Artist"
              inputID="artist"
              handleChangeEventFormInput={handleChangeEventFormInput}
            />
            <FormTextInput
              inputName="Song Title"
              inputID="song_title"
              handleChangeEventFormInput={handleChangeEventFormInput}
            />
            <FormTextInput
              inputName="Spotify URL"
              inputID="spotify_url"
              handleChangeEventFormInput={handleChangeEventFormInput}
            />
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
