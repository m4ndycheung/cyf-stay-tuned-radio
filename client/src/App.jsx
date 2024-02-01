import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmbeddedPlayer from "./components/EmbeddedPlayer";
import FormTextInput from "./components/FormTextInput";

function App() {
  const [count, setCount] = useState(0);
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
    console.log(formData, server_url)
    const sendSongsToDB = await fetch(`${server_url}/songs/add`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const response = await sendSongsToDB.json()
    console.log(response.result)
    alert(response.result)
  }
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <EmbeddedPlayer />
      <FormTextInput inputName="Artist" inputID="artist" handleChangeEventFormInput={handleChangeEventFormInput}/>
      <FormTextInput inputName="Song Title" inputID="song_title" handleChangeEventFormInput={handleChangeEventFormInput}/>
      <FormTextInput inputName="Spotify URL" inputID="spotify_url" handleChangeEventFormInput={handleChangeEventFormInput}/>
      <button onClick={submitFormData}>Submit</button>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
