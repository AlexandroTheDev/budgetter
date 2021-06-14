import { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth/AuthContext'

export default function MainNavbar() {

    const { user, isAuthenticated, logoutUser } = useContext(AuthContext)

    const onLogout = () =>{
        logoutUser()
    }

    const authRightLinks = (
        <>
            <Nav.Link>Hello, { user && user.firstName}</Nav.Link>
            <Nav.Link onClick={onLogout}><i className="las la-sign-out-alt"></i> Logout</Nav.Link>
        </>
    )
    const authLeftLinks = (
        <Nav className="mr-auto">
            <Nav.Link to="/records" as={Link}>Records</Nav.Link>
            <Nav.Link to="/categories" as={Link}>Categories</Nav.Link>
        </Nav>
    )
    const guestRightLinks = (
        <>
            <Nav.Link to="/register" as={Link}>Register</Nav.Link>
            <Nav.Link to="/login" as={Link}>Login</Nav.Link>
        </>
    )
    
    return (
        <Navbar expand="md">
            <Navbar.Brand to="/" as={Link}>Budgetter</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                { isAuthenticated && authLeftLinks}
                <Nav className="ml-auto">
                    { isAuthenticated ? authRightLinks : guestRightLinks}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
