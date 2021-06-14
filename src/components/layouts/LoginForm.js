import { useContext } from "react"
import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { AlertContext } from "../../contexts/alert/AlertContext"

export default function LoginForm() {

    const {setAlert} = useContext(AlertContext)

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })

    const {email, password } = credentials

    const handleChange = e => setCredentials({...credentials, [e.target.id] : e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        
        setAlert("Login Successful", "success")

    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    value={email}
                    type="email"
                    required
                />
            </Form.Group>


            <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    value={password}
                    type="password"
                    required
                    />
            </Form.Group>

            <Button type="submit" block>Register</Button>
        </Form>
    )
}
