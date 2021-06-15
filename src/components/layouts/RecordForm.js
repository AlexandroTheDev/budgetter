import { Form, InputGroup, Button } from "react-bootstrap"

export default function RecordForm() {
    return (
        <Form>         
            <Form.Group controlId="amount">
                <Form.Label>Amount:</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">&#8369;</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control />
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="date">
                <Form.Label>Date:</Form.Label>
                <Form.Control type="date" />
            </Form.Group>

            <Form.Group controlId="category">
                <Form.Label>Category:</Form.Label>
                <Form.Control as="select">
                    <option value="" disabled selected>Select</option>
                    <option value="sample" >Sample</option>
                </Form.Control>
            </Form.Group>
            <Button type="submit" block> <i className="las la-plus-circle"></i> Record</Button>
        </Form>
    )
}
