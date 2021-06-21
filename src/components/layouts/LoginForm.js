import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { AlertContext } from "../../contexts/alert/AlertContext"
import { AuthContext } from "../../contexts/auth/AuthContext"

export default function LoginForm() {

    const {setAlert} = useContext(AlertContext)
    const { loginUser, error, isAuthenticated, clearError } = useContext(AuthContext);
    const history = useHistory()

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })

    const {email, password } = credentials

    const handleChange = e => setCredentials({...credentials, [e.target.id] : e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        loginUser(credentials)
    }
    
    useEffect(() => {
        if(isAuthenticated) {
            setAlert("Login Successful", "success")
            history.push('/')
        }
        if(error) {
            setAlert(error, 'danger')
        }
        clearError()
        
        // eslint-disable-next-line
    }, [error,isAuthenticated])

    return (
        <Form onSubmit={handleSubmit} className="mb-3 px-3 py-4">
            <h1 className="text-center">Account <span className="text-primary">Login</span></h1>
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

            <div className="d-grid">
                <Button type="submit" className="mt-3 text-center" block>Login</Button>
            </div>
        </Form>
    )
}
