import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmbeddedPlayer from "./components/EmbeddedPlayer";
import AddSongForm from "./components/AddSongForm";
import Header from "./components/header/Header";
import Background from "./components/Background";
import UpdateSpotifyPlaylistButton from "./components/UpdateSpotifyPlaylistButton";

function App() {
  //getting token from query string sent from backend
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const maciToken = params.get("token");
  // check if query return equals null and if it does not, set sessionstorage to maciToken
  if (maciToken !== null) {
    //set session storage data for maciToken
    sessionStorage.setItem("maciToken", maciToken);
    console.log(`sessionStorageData: ${sessionStorage.getItem("maciToken")}`);
  }

  const [isLoggedIn, setLogin] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("maciToken") !== null) setLogin(true);
  }, []);

  return (
    <>
      <Background />
      <Header isLoggedIn={isLoggedIn} key={isLoggedIn} />
      {/* <Home />
      <About /> */}
      <EmbeddedPlayer />
      {isLoggedIn ? <AddSongForm /> : <></>}
      <UpdateSpotifyPlaylistButton />
    </>
  );
}

export default App;
