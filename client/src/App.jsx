import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmbeddedPlayer from "./components/EmbeddedPlayer";
import AddSongForm from "./components/AddSongForm";
import Header from "./components/header/Header";
import Background from "./components/Background";
import SpotifyFirstRunButton from "./components/SpotifyFirstRunButton";

function App() {
  //getting token from query string sent from backend
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const workspaceToken = params.get("token");
  // check if query return equals null and if it does not, set sessionstorage to workspaceToken
  if (workspaceToken !== null) {
    //set session storage data for workspaceToken
    sessionStorage.setItem("workspaceToken", workspaceToken);
    console.log(
      `sessionStorageData: ${sessionStorage.getItem("workspaceToken")}`
    );
  }

  const [isLoggedIn, setLogin] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("workspaceToken") !== null) setLogin(true);
  }, []);

  return (
    <>
      <Background />
      <Header isLoggedIn={isLoggedIn} key={isLoggedIn} />
      {/* <Home />
      <About /> */}
      <EmbeddedPlayer />
      {isLoggedIn ? <AddSongForm /> : <></>}
      <SpotifyFirstRunButton />
    </>
  );
}

export default App;
