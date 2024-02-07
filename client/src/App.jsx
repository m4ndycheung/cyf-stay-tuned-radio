import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmbeddedPlayer from "./components/EmbeddedPlayer";
import AddSongForm from "./components/AddSongForm";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Background from "./components/Background";
import { useEffect, useState } from "react";

function App() {
  const urlSearchString = window.location.search;
  const params = new URLSearchParams(urlSearchString);
  const token = params.get(`token`);
  const [tokenData, setTokenData] = useState(token);

  useEffect(() => {
    if (token !== null) {
      sessionStorage.setItem("token", token);
    }
    console.log(sessionStorage.getItem("token"));
  }, [token, tokenData]);

  const handleOnClickLogOut = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    setTokenData(null);
  };

  const handleOnClickLogin = (event) => {
    event.preventDefault();
    window.open("http://localhost:5173/api/jwt/authorise", "_self");
  };

  return (
    <>
      <Background />
      <Header />
      {/* <Home />
      <About /> */}
      <EmbeddedPlayer />
      {sessionStorage.getItem("token") !== null ? (
        <>
          <AddSongForm />
          <button
            className="btn btn-secondary my-2"
            onClick={handleOnClickLogOut}
          >
            Log Out
          </button>
        </>
      ) : (
        <button className="btn btn-primary" onClick={handleOnClickLogin}>
          Login
        </button>
      )}
    </>
  );
}

export default App;
