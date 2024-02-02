import { useState } from "react";
import "./App.css";
import EmbeddedPlayer from "./components/EmbeddedPlayer";
import AddSongForm from "./components/AddSongForm";

function App() {
  return (
    <>
      <EmbeddedPlayer />
      <AddSongForm />
    </>
  );
}

export default App;
