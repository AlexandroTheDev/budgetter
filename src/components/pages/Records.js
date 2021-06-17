import { Container, Row, Col } from 'react-bootstrap'
import RecordForm from '../layouts/RecordForm';
import RecordList from '../layouts/RecordList';

export default function Records() {


    return (
        <Container>
            <Row>
                <Col xs="12" md="8" lg="9">
                    <RecordList />
                </Col>
                <Col xs="12" md="4" lg="3">
                    <h2 className="text-center">Add New Record</h2>
                    <RecordForm />
                </Col>
            </Row>
        </Container>
    )
}
