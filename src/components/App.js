import '../styles/App.css';
import { Outlet } from "react-router";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Photo App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;
