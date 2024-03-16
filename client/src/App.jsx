import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { jwtDecode } from "jwt-decode";
import EmbeddedPlayer from "./components/EmbeddedPlayer";
import AddSongForm from "./components/AddSongForm";
import Header from "./components/header/Header";
import Background from "./components/Background";
import UpdateSpotifyPlaylistButton from "./components/UpdateSpotifyPlaylistButton";

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    //getting token from query string sent from backend
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const workspaceToken = params.get("token");
    // check if query return equals null and if it does not, set sessionstorage to maciToken
    if (workspaceToken !== null) {
      //set session storage data for workspaceToken
      sessionStorage.setItem("workspaceToken", workspaceToken);
      console.log(`sessionStorageData: ${sessionStorage.getItem("workspaceToken")}`);
      //decodes token and set userRole state to equal to role inside token
      const decoded = jwtDecode(sessionStorage.getItem("workspaceToken"));
      setUserRole(decoded.role);
    }
    if (sessionStorage.getItem("workspaceToken") !== null) setLogin(true);
  }, []);

  return (
    <>
      <Background />
      <Header userRole={userRole} key={userRole} />
      {/* <Home />
      <About /> */}
      <EmbeddedPlayer />
      {userRole === "admin" || userRole === "basic" ? <AddSongForm /> : <></>}
      {userRole === "admin" ? (
        <UpdateSpotifyPlaylistButton userRole={userRole} />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
