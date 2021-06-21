import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { AlertContext } from "../../contexts/alert/AlertContext"
import { AuthContext } from "../../contexts/auth/AuthContext"

export default function RegisterForm() {

    const {setAlert} = useContext(AlertContext)
    const {register, error, clearError, isAuthenticated, isLoading} = useContext(AuthContext)
    const history = useHistory()

    const [credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    useEffect(()=>{
        if (error === "Email address already in use"){
            setAlert(error, 'danger')
            clearError()
        }
        if(isAuthenticated) {
            setAlert('Registration successfull','success')
            history.push('/')
        }

        // eslint-disable-next-line
    },[error,isAuthenticated])

    const {firstName, lastName, email, password, confirmPassword } = credentials

    const handleChange = e => setCredentials({...credentials, [e.target.id] : e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        if(password.length < 8){
            setAlert("Password must be atlease 8 characters","danger")
        } else if( password !== confirmPassword) {
            setAlert("Passwords should matched", "danger")
        } else {
            register(credentials)
        }

    }

    return (
        <Form onSubmit={handleSubmit} className="bg-white shadow rounded px-2 py-3 px-md-3 py-md-5 mb-3">
            <h1 className="text-center">Account <span className="text-primary">Register</span></h1>
            <Form.Group controlId="firstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    value={firstName}
                    required
                />
            </Form.Group>

            <Form.Group controlId="lastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    value={lastName}
                    required
                />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    value={email}
                    type="email"
                    required
                />
            </Form.Group>
            <Row>
                <Col xs="12" sm="6">
                    <Form.Group controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control 
                            onChange={handleChange}
                            value={password}
                            type="password"
                            required
                            />
                    </Form.Group>
                </Col>
                <Col xs="12" sm="6">
                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control 
                            onChange={handleChange}
                            value={confirmPassword}
                            type="password"
                            required
                            />
                    </Form.Group>
                </Col>
            
            </Row>
            {
                !isLoading &&
                <div className="d-grid">
                    <Button type="submit" block>Register</Button>
                </div>
            }
        </Form>
    )
}
