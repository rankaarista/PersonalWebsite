// src/PageNavbar.jsx
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import crest from './assets/uw-crest.svg'

export default function PageNavbar() {
return (
    <Navbar 
        className="bg-white/50" 
        fixed="top" 
        expand="sm" 
        collapseOnSelect
        style={{
            marginLeft: "8px", 
            marginRight: "8px", 
            marginTop: "8px", 
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            padding: "10px"
        }}>
        <Container>
            <Navbar.Brand as={Link} to="/pages/About">
                    <img
                            alt="Badger Buddies Logo"
                            src={crest}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                    />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={{padding: "0.5rem"}}>
                    <Nav.Link style={{paddingTop: "14px"}} as={Link} to="/">
                    <p>Home</p> </Nav.Link>
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