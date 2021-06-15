import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import RecordForm from '../layouts/RecordForm';

export default function Records() {

    const [showCategoryForm, setShowCategoryForm] = useState(false);
    const [showEntryForm, setShowEntryForm] = useState(false);

    const handleCloseCategoryForm = () => setShowCategoryForm(false);
    const handleShowCategoryForm = () => setShowCategoryForm(true);


    const handleCloseEntryForm = () => setShowEntryForm(false);
    const handleShowEntryForm = () => setShowEntryForm(true);

    return (
        <>
        <Container>
            <Row>
                <Col xs="12" md="8" lg="9">
                    test
                </Col>
                <Col xs="12" md="4" lg="3">
                    <h2 className="text-center">Add New Record</h2>
                    <RecordForm />
                </Col>
            </Row>
        </Container>
       
        </>

    )
}
