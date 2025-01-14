// src/PageNavbar.jsx
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import crest from './assets/uw-crest.svg'

export default function PageNavbar() {
return (
    <Navbar
        fixed="top"
        expand="sm"
        collapseOnSelect
        style={{
            background: "rgba(255, 255, 255, 0.35)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.4)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "50px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            width: "32%",
            maxWidth: "500px",
            margin: "1rem auto",
            left: "30%",
            transform: "translateX(-50%)",
            padding: "0.5rem 2rem",
            // Added properties for better mobile handling
            overflowX: "hidden",
            fontSize: "clamp(0.8rem, 2vw, 1rem)", // Responsive font size
          }}>
        <Container>
            <Navbar.Brand as={Link} to="/pages/About">
                    <img
                            alt="Badger Buddies Logo"
                            src={crest}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                    />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"
                style={{
                    maxHeight: "80vh",  // Maximum height of 80% viewport height
                    overflowY: "auto", // Allows scrolling if content is too long
                    '@media (max-width: 576px)': {
                    background: "rgba(255, 255, 255, 0.35)", // Same as navbar background
                    backdropFilter: "blur(12px)",
                    margin: "0.5rem -1rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "25px",
                    }
                }}>
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