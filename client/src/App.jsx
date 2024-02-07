import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmbeddedPlayer from "./components/EmbeddedPlayer";
import AddSongForm from "./components/AddSongForm";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Background from "./components/Background";

function App() {
  //getting token from query string sent from backend
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const maciToken = params.get("token");
  console.log(maciToken);
  return (
    <>
      <Background />
      <Header />
      {/* <Home />
      <About /> */}
      <EmbeddedPlayer />
      <AddSongForm />
    </>
  );
}

export default App;
