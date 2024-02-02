import { useState } from "react";
import FormTextInput from "./FormTextInput";
import "./AddSongForm.css";

export default function AddSongForm() {
    const [formData, setFormData] = useState({});
    const server_url = import.meta.env.VITE_SERVER_URL;

    function handleChangeEventFormInput(key, value) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [key]: value
            };
        })
    }

    async function submitFormData(event) {
        event.preventDefault()
        const sendSongsToDB = await fetch(`${server_url}/songs/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })
        const response = await sendSongsToDB.json()
        alert(response.result)
    }
  
    return (
        <form>
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
    )
}