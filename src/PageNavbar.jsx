// src/PageNavbar.jsx
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import crest from './assets/uw-crest.svg'

export default function PageNavbar() {
return (
    <Navbar bg="white" variant="light" fixed="top" expand="sm" collapseOnSelect>
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
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={{padding: "0.5rem"}}>
                    <Nav.Link style={{paddingTop: "14px"}} as={Link} to="/">Home</Nav.Link>
                    <Nav.Link style={{paddingTop: "14px"}} as={Link} to="/pages/Projects">Projects</Nav.Link>
                    <Nav.Link style={{paddingTop: "14px"}} as={Link} to="/pages/Experience">Experience</Nav.Link>
                    <Nav.Link as={Link} to="/pages/Contact">
                            <Button variant="outline-secondary" >
                                    Connect
                            </Button>
                    </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}