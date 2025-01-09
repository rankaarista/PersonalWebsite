import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageNavbar(props) {
    
    return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/components/About">About Me</Nav.Link>
                    <Nav.Link as={Link} to="/components/Contact">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/components/Experience">Experience</Nav.Link>
                    <Nav.Link as={Link} to="/components/Projects">Contact Me</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}