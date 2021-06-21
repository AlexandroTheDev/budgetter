import moment from "moment"
import { useContext, useState } from "react"
import { Modal, Button, Form, InputGroup } from "react-bootstrap"
import { AlertContext } from "../../contexts/alert/AlertContext"
import { CategoryContext } from "../../contexts/category/CategoryContext"
import { RecordContext } from "../../contexts/record/RecordContext"

export default function RecordEditForm({show, handleClose}) {

    const { isLoading, categories } = useContext(CategoryContext)
    const { currentRecord, updateRecord } = useContext(RecordContext)
    const { setAlert } = useContext(AlertContext)
    
    
    const [updatedRecord, setUpdatedRecord] = useState({
        amount: currentRecord.amount,
        date: moment(currentRecord.date).format('YYYY-MM-DD'),
        type: currentRecord.type,
        category : currentRecord.category,
        _id : currentRecord._id
    })   
    
    
    const displayCategories = categories.map( category => (
        <option value={category._id} key={category._id}>{category.name}</option>
    ))
    
    const handleChange = (e, field) => setUpdatedRecord({ ...updatedRecord, [field] : e.target.value}) 

    const handleSubmit = e => {
        e.preventDefault()
        if( !isNaN(updatedRecord.amount)){
            updateRecord(updatedRecord)
        } else {
            setAlert("Amount should be a number","danger")
            handleClose()
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="edit-amount">
                        <Form.Label>Amount</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">&#8369;</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                value={updatedRecord.amount}
                                onChange={e => {handleChange(e,"amount")}}
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="edit-date">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control 
                            type="date" 
                            value={updatedRecord.date}
                            onChange={e => {handleChange(e,"date")}}
                        />
                    </Form.Group>

                    <Form.Group controlId="edit-category">
                        <Form.Label>Category:</Form.Label>
                        <Form.Control as="select" value={updatedRecord.category} onChange={e => {handleChange(e,"category")}}>
                            {!isLoading && displayCategories}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="edit-type">
                        <Form.Label>Type:</Form.Label>
                        <Form.Control as="select" value={updatedRecord.type} onChange={e => {handleChange(e,"type")}}>
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </Form.Control>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button  type="submit" variant="primary" >
                            Save Changes
                        </Button>

                        <Button variant="secondary" onClick={handleClose}>Cancel Edit</Button>
                    </div>
                    </Form>
                </Modal.Body>
            </Modal>
    )
}
