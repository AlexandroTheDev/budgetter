import { useContext } from "react"
import { CategoryContext } from "../../contexts/category/CategoryContext"

export default function CategoryListItem({ category }) {

    const { setCurrentCategory} = useContext(CategoryContext)

    const handleClick = () =>{
        console.log(category._id)
        setCurrentCategory(category._id)
    }

    return (
        <div className="border rounded-pill py-2 px-3 mb-1 mx-1 bg-light shadow category-pill" onClick={handleClick}>
            <span className="d-flex align-items-center">
                <span>{category.name}</span> <i className="las la-edit ml-2" style={{fontSize: "1.5rem"}}></i>
            </span>
        </div>

    )
}

