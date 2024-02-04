import { useState } from "react";
import FormTextInput from "./FormTextInput";

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

    async function submitFormData() {
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
        <>
            <FormTextInput inputName="Artist" inputID="artist" handleChangeEventFormInput={handleChangeEventFormInput}/>
            <FormTextInput inputName="Song Title" inputID="song_title" handleChangeEventFormInput={handleChangeEventFormInput}/>
            <FormTextInput inputName="Spotify URL" inputID="spotify_url" handleChangeEventFormInput={handleChangeEventFormInput}/>
            <button onClick={submitFormData}>Submit</button>
        </>
    )
}