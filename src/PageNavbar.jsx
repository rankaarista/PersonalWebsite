// src/PageNavbar.jsx
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import crest from './assets/uw-crest.svg'

export default function PageNavbar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/pages/About">
            <img
                alt="Badger Buddies Logo"
                src={crest}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/pages/About">About Me</Nav.Link>
            <Nav.Link as={Link} to="/pages/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/pages/Contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}