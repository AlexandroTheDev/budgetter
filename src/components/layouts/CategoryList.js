import { CategoryContext } from '../../contexts/category/CategoryContext'
import { useContext } from 'react'
import CategoryListItem from './CategoryListItem'

export default function CategoryList() {

    
    const {categories} = useContext(CategoryContext)

    const displayCategories = categories.map( category => (
        <CategoryListItem key={category.id} category={category} />
    ))
    
    return (
        <>
            <div className="d-flex flex-wrap">
                {displayCategories}
            </div>
        </>
    )
}
