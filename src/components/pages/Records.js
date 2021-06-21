import { Container, Row, Col } from 'react-bootstrap'
import RecordForm from '../layouts/RecordForm';
import RecordList from '../layouts/RecordList';

export default function Records() {


    return (
        <Container>
            <Row>
                <Col xs="12" md="8" lg="9" className="mb-3">
                    <RecordList />
                </Col>
                <Col xs="12" md="4" lg="3" className="mb-3">
                    
                    <RecordForm />
                </Col>
            </Row>
        </Container>
    )
}
