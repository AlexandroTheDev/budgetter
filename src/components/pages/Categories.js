import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CategoryList from '../layouts/CategoryList'
import CategoryForm from '../layouts/CategoryForm'

export default function Categories() {


    return (
        <Container>
            <Row>
                <Col xs="12" className="mb-5">
                    <h2 className="text-center">Manage Categories</h2>
                </Col>
                <Col xs="12" md="6" lg="4" className="mb-3">
                    
                    <CategoryForm />
                </Col>
                <Col>
                    <CategoryList />
                </Col>
            </Row>
        </Container>
    )
}
