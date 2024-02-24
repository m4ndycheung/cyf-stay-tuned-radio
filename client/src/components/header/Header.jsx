import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = (isLoggedIn) => {
  const server_url = import.meta.env.VITE_SERVER_URL;
  const frontend_url = import.meta.env.VITE_FRONTEND_URL;

  const handleLogout = function (event) {
    event.preventDefault();
    sessionStorage.clear();
    window.open(`${frontend_url}`, "_self");
  };

  const handleLogin = function (event) {
    event.preventDefault();
    window.open(`${server_url}/slack-sign-in`, "_self");
  };

  return (
    <Navbar expand="lg" className="rounded bg-body-tertiary mb-3">
      <Container className="mx-3">
        <Navbar.Brand href="#home">MACI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogin}>Login</Nav.Link>
            )}
            {/* <Nav.Link onClick={open(isLoggedIn.link)}>
              {isLoggedIn.name}
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
