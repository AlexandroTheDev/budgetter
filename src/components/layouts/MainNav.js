import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MainNav() {
    return (
        <Navbar expand="md">
            <Navbar.Brand>Budgetter</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link to="/register" as={Link}>Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

