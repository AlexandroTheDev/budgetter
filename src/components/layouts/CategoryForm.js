import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Form , Button} from "react-bootstrap"
import { CategoryContext } from "../../contexts/category/CategoryContext"

export default function CategoryForm() {
    
    const {addCategory, currentCategory, clearCurrentCategory,editCategory} = useContext(CategoryContext)

    const [category, setCategory] = useState({
        name: ""
    })

    useEffect(() =>{
        if(currentCategory){
            setCategory(currentCategory)
        }
    }, [currentCategory])

    const handleChange = e => setCategory({...category, [e.target.id] : e.target.value})
    const handleSubmit = e => {
        e.preventDefault()
        !currentCategory ? addCategory(category) : editCategory(currentCategory.id, category)
    }
    const handleCancelEdit = () => {
        clearCurrentCategory()
        setCategory({name: ""})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h3>{ !currentCategory ? "Create" : "Update"} Category</h3>
            <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    value={category.name}
                    onChange={handleChange}
                    required
                    onFocus={e => e.target.select()}
                />
            </Form.Group>
            { !currentCategory 
                ? <Button type="submit" block><i className="las la-plus-circle"></i> Create Category</Button>
                : <>
                    <Button type="submit" variant="warning" block><i className="las la-edit"></i> Update Category</Button>
                    <Button variant="danger" block><i className="las la-trash"></i> Delete Category</Button>
                    <Button variant="secondary" block onClick={handleCancelEdit}><i className="las la-arrow-alt-circle-left"></i> Cancel Edit Category</Button>
                </>
            }
        </Form>
    )
}