import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import LoginForm from '../layouts/LoginForm'

export default function Login() {
    return (
        <Container>
            <Row>
                <Col xs="12" sm="10" md="8" lg="6" className="mx-auto">
                    <Card className="shadow p-5">
                    <h1 className="text-center">Account Login</h1>
                        <LoginForm />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
