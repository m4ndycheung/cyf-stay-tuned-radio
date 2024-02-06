import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmbeddedPlayer from "./components/EmbeddedPlayer";
import AddSongForm from "./components/AddSongForm";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Background from "./components/Background";
import SessionStorageTest from "./components/SessionStorageTest";

function App() {
  return (
    <>
      <Background />
      <Header />
      {/* <Home />
      <About /> */}
      <EmbeddedPlayer />
      <AddSongForm />
      <SessionStorageTest />
    </>
  );
}

export default App;
