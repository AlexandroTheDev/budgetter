import React from 'react'
import RegisterForm from '../layouts/RegisterForm'
import { Container, Row, Col } from 'react-bootstrap'

export default function Register() {
    return (
        <Container>
            <Row>
                <Col xs="12" sm="10" md="8" lg="6" className="mx-auto">
                    <RegisterForm />
                </Col>
            </Row>
        </Container>
    )
}
