import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import EmbeddedPlayer from "./components/EmbeddedPlayer";
import AddSongForm from "./components/AddSongForm";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <EmbeddedPlayer />
      <AddSongForm />
    </>
  );
}

export default App;
