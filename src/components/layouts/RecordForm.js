import { useState } from "react"
import { useContext } from "react"
import { Form, InputGroup, Button } from "react-bootstrap"
import { RecordContext } from "../../contexts/record/RecordContext"
import { CategoryContext } from "../../contexts/category/CategoryContext"
import { AlertContext } from "../../contexts/alert/AlertContext"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import moment from "moment"

export default function RecordForm() {

    const { addRecord, isLoading: recordIsLoading } = useContext(RecordContext)
    const { categories, isLoading, getCategories } = useContext(CategoryContext)
    const { setAlert } = useContext(AlertContext)
    const [record, setRecord] = useState({
        amount: 0,
        date: new Date().toLocaleString([],{year: 'numeric', month: 'numeric', day: 'numeric'}),
        category: "",
        type: "expense"
    })

    useEffect(()=>{
        getCategories()
        // eslint-disable-next-line        
    },[])


    const displayCategories = categories.map(category => (<option key={category._id} value={category._id} >{category.name}</option>))

    const handleChange = e => setRecord({...record, [e.target.id] : e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        if(!isNaN(record.amount)){
            addRecord(record)
        } else {
            setAlert("Amount should be a number","danger")
        }
    }

    return (
        categories.length  === 0 ? <>
        No categories found, Please add categories {<Button to="/categories" as={Link}>here</Button>}
        </> :
        <Form onSubmit={handleSubmit}>         
            <Form.Group controlId="amount">
                <Form.Label>Amount:</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">&#8369;</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control onChange={handleChange} value={record.amount} onFocus={ e => e.target.select()} required />
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="date">
                <Form.Label>Date:</Form.Label>
                <Form.Control type="date" onChange={handleChange} value={moment(record.date).format('YYYY-MM-DD')} required />
            </Form.Group>

            <Form.Group controlId="category">
                <Form.Label>Category:</Form.Label>
                <Form.Control as="select" onChange={handleChange} value={record.category} required>
                    <option value="" disabled>Select</option>
                    {!isLoading && displayCategories}
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
                <Form.Label>Type:</Form.Label>
                <Form.Control as="select"onChange={handleChange} value={record.type} required>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </Form.Control>
            </Form.Group>
            { recordIsLoading ? <Button type="submit" block disabled> <i className="las la-plus-circle"></i> Record</Button> : 
            <Button type="submit" block> <i className="las la-plus-circle"></i> Record</Button>
             }
        </Form>
    )
}
