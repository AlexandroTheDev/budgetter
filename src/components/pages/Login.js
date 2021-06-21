import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import LoginForm from '../layouts/LoginForm'

export default function Login() {
    return (
        <Container>
            <Row>
                <Col xs="12" sm="10" md="8" lg="6" className="mx-auto">
                    <Card className="shadow rounded mb-3">
                        <LoginForm />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
