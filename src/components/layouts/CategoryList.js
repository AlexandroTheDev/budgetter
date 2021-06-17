import { CategoryContext } from '../../contexts/category/CategoryContext'
import { useContext } from 'react'
import CategoryListItem from './CategoryListItem'
import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'

export default function CategoryList() {

    
    const {categories, getCategories, isLoading} = useContext(CategoryContext)

    useEffect(() => {
        getCategories()

        // eslint-disable-next-line
    },[])

    const displayCategories = categories === null || categories.length === 0 ? "No Categories Found" : categories.map( category => (
        <CategoryListItem key={category._id} category={category} />
    ))
    
    return (
        <>
            <div className="d-flex flex-wrap">
                { isLoading ? 
                    <>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner> Loading
                    </>
                : displayCategories}
            </div>
        </>
    )
}
