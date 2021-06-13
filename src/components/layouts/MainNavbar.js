import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MainNavbar() {
    return (
        <Navbar expand="md">
            <Navbar.Brand to="/" as={Link}>Budgetter</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link to="/register" as={Link}>Register</Nav.Link>
                    <Nav.Link to="/login" as={Link}>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}