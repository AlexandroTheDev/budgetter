import { useEffect } from 'react'
import { useContext, useState } from 'react'
import { Col, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { AlertContext } from '../../contexts/alert/AlertContext'
import { AuthContext } from '../../contexts/auth/AuthContext'

export default function RegisterForm(props) {

    const {register, error, clearErrors, isAuthenticated} = useContext(AuthContext)
    const {setAlert} = useContext(AlertContext)
    const history = useHistory()

    const [credentials, setcredentials ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    useEffect(() =>{
        if(isAuthenticated){
            history.push('/')
        }

        if(error === "Email address already in use"){
            setAlert(error,'danger')
            clearErrors()
        }
        // eslint-disable-next-line
    },[error, isAuthenticated])

    const { password, confirmPassword, firstName, lastName, email} = credentials

    const handleChange = e => setcredentials({...credentials, [e.target.id] : e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        if(firstName === '' || lastName === '' || email === '') {
            setAlert("Incomplete Fields", "danger")
        } else if(password.length < 8 ){
            setAlert("Password must be atleast 8 characters")
        } else if( password !== confirmPassword){
            setAlert("Passwords do not matched", "danger")
        } else {    
            register(credentials)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h2 className="text-center">Account Registration</h2>
            <Form.Row>
                <Col xs="12" md="6">
                    {/* FirstName */}
                    <Form.Group controlId="firstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control 
                            type="text"
                            onChange={handleChange}
                            value={credentials.firstName}
                        />
                    </Form.Group>
                </Col>

                <Col xs="12" md="6">
                    {/* Last Name */}
                    <Form.Group controlId="lastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control 
                            type="text"
                            onChange={handleChange}
                            value={credentials.lastName}
                        />
                    </Form.Group>
                </Col>

            </Form.Row>

            {/* Email */}
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email"
                    onChange={handleChange}
                    value={credentials.email}
                />
            </Form.Group>

            <Form.Row>

                <Col xs="12" sm="6">
                    {/* Password */}
                    <Form.Group controlId="password">
                        <Form.Label >Password</Form.Label>
                        <Form.Control 
                            type="password"
                            onChange={handleChange}
                            value={credentials.password}    
                        />

                    </Form.Group>            
                </Col>

                <Col xs="12" sm="6">
                    {/* Confirm Password */}
                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            onChange={handleChange}
                            value={credentials.confirmPassword}
                        />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Button type="submit" block>Register</Button>
        </Form>
    )
}
