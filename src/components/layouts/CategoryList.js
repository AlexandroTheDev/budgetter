import { CategoryContext } from '../../contexts/category/CategoryContext'
import { useContext } from 'react'
import CategoryListItem from './CategoryListItem'
import { useEffect } from 'react'
import Loading from './Loading'

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

        isLoading ? 
            <Loading />
        : <div className="d-flex flex-wrap">
            {displayCategories}
        </div>
            
    )
}
