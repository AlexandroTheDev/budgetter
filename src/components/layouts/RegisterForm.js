import { useContext } from "react"
import { useState } from "react"
import { Form, Button, Col } from "react-bootstrap"
import { AlertContext } from "../../contexts/alert/AlertContext"

export default function RegisterForm() {

    const {setAlert} = useContext(AlertContext)

    const [credentials, setCredentials] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const {firstName, lastName, email, password, confirmPassword } = credentials

    const handleChange = e => setCredentials({...credentials, [e.target.id] : e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        if(password.length < 8){
            setAlert("Password must be atlease 8 characters","danger")
        } else if( password !== confirmPassword) {
            setAlert("Passwords should matched", "danger")
        }

    }

    return (
        <Form onSubmit={handleSubmit}>

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
            <Form.Row>
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
            
            </Form.Row>
            <Button type="submit" block>Register</Button>
        </Form>
    )
}
