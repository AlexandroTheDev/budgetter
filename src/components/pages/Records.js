import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'
import CategoryForm from '../layouts/CategoryForm';

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
                <Col>
                    <Card onClick={handleShowCategoryForm}>
                        <Card.Body>
                            <i className="las la-plus-circle"></i> Add Category
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card onClick={handleShowEntryForm}>
                        <Card.Body>
                            <i className="las la-plus-circle"></i> Add Entry
                        </Card.Body>
                    </Card>
                </Col>
            </Row>  
        </Container>
        {/* Add Category Modal */}
        <Modal show={showCategoryForm} onHide={handleCloseCategoryForm}>
            <Modal.Header closeButton>
                <Modal.Title>Add Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CategoryForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseCategoryForm}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={showEntryForm} onHide={handleCloseEntryForm}>
            <Modal.Header closeButton>
                <Modal.Title>Add Entry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <EntryForm /> */} test
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEntryForm}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>

    )
}
