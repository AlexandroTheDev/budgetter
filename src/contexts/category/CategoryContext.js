import { useReducer } from "react";
import { createContext } from "react";
import categoryReducer from "./categoryReducer";
import { v4 as uuid } from 'uuid'
import { ADD_CATEGORY, CLEAR_CURRENT_CATEGORY, EDIT_CATEGORY, SET_CURRENT_CATEGORY } from "../types";

export const CategoryContext = createContext()

export default function CategoryContextProvider(props) {
    const initialState = {
        categories : [
            {
                id: 1,
                name: "House",
            },
            {
                id: 2,
                name: "Business",
            },
            {
                id: 3,
                name: "Rent",
            },

        ],
        current: null
    }

    const [state, dispatch] = useReducer(categoryReducer, initialState)

    // Add Category
    const addCategory = (category) =>{
        const id = uuid()
        dispatch({
            type: ADD_CATEGORY,
            payload: {...category, id}
        })
    }

    // Set Current Category
    const setCurrentCategory = id =>{
        dispatch({
            type: SET_CURRENT_CATEGORY,
            payload: id
        })
    }

    // Clear Current Category
    const clearCurrentCategory = () =>{
        dispatch({
            type: CLEAR_CURRENT_CATEGORY
        })
    }

    // Edit Category
    const editCategory = (id, updatedCategory) => {

        dispatch({
            type: EDIT_CATEGORY,
            payload: {id, name: updatedCategory.name}
        })
    }

    // Delete Category

    return (
        <CategoryContext.Provider value={{
            categories: state.categories,
            addCategory,
            setCurrentCategory,
            currentCategory: state.current,
            clearCurrentCategory,
            editCategory
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}