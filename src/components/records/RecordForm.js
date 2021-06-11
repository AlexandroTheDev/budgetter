import { useState, useContext } from "react"
import { Form, Button, InputGroup} from "react-bootstrap"
import { RecordContext } from "../../context/RecordContext"


export default function RecordForm() {

    const recordContext = useContext(RecordContext)

    const [record, setRecord] = useState({
        amount: "",
        type: "",
        category: ""
    })

    const handleChange = e => setRecord({...record, [e.target.id] : e.target.value})
    
    const handleSubmit = e =>{
        e.preventDefault()
        recordContext.addRecord(record)
        setRecord({
            amount: "",
            type: "",
            category: ""
        })
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group controlId="amount">
                <Form.Label>Amount:</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>&#8369;</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control onChange={handleChange} value={record.amount} onFocus={ e => e.target.select()} required/>
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="category">
                <Form.Label>Category:</Form.Label>
                <Form.Control onChange={handleChange} value={record.category} as="select" required>
                    <option disabled value="">Select</option>
                    <option value="id1">id1</option>
                    <option value="id2">id2</option>
                    <option value="id3">id3</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
                <Form.Label>Type:</Form.Label>
                <Form.Control onChange={handleChange} value={record.type} as="select" required>
                    <option disabled value="">Select</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </Form.Control>
            </Form.Group>

            <Button type="submit">Add Record</Button>
        </Form>
    )
}
