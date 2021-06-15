import { useReducer } from "react";
import { createContext } from "react";
import categoryReducer from "./categoryReducer";
import { v4 as uuid } from 'uuid'
import { ADD_CATEGORY, CATEGORY_ERROR, CLEAR_CURRENT_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, GET_CATEGORIES, SET_CURRENT_CATEGORY, SET_LOADING } from "../types";
import axios from "axios";

export const CategoryContext = createContext()

export default function CategoryContextProvider(props) {
    const initialState = {
        categories : [],
        current: null,
        error: null,
        isLoading : true
    }

    const [state, dispatch] = useReducer(categoryReducer, initialState)

    // Get Category
    const getCategories = () => {
        axios.get(`${process.env.REACT_APP_BE}/api/categories`)
        .then( res => {
            console.log("Test")
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            })
        })
        .catch( err =>{
            dispatch({
                type: CATEGORY_ERROR,
                payload: err.response.data.error.message
            })
        })
    }

    // Add Category
    const addCategory = (category) =>{
        dispatch({
            type: SET_LOADING,
            payload: true
        })
        const config = {
            headers : {
                "Content-Type" :"application/json"
            }
        }

        axios.post(`${process.env.REACT_APP_BE}/api/categories`, category, config )
        .then(res => {
            dispatch({
                type: ADD_CATEGORY,
                payload: res.data
            })
        })
        .catch( err=> {
            dispatch({
                type: CATEGORY_ERROR,
                payload: err.response.data.error.message
            })
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
            type: SET_LOADING,
            payload: true
        })
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        console.log(id)
        axios.put(`${process.env.REACT_APP_BE}/api/categories/${id}`,updatedCategory, config)
        .then( res =>{
            dispatch({
                type: EDIT_CATEGORY,
                payload: {id, ...res.data}
            })
            setCurrentCategory(id)
        })
        .catch( err => {
            dispatch({
                type: CATEGORY_ERROR,
                payload: err.response.data.error.message
            })
        })

    }

    // Delete Category
    const deleteCategory = (id) => {
        
        dispatch({
            type: SET_LOADING,
            payload: true
        })

        axios.delete(`${process.env.REACT_APP_BE}/api/categories/${id}`)
        .then( res => {
            dispatch({
                type: DELETE_CATEGORY,
                payload: res.data._id
            })
            clearCurrentCategory()
        })
        .catch( err => {
            dispatch({
                type: CATEGORY_ERROR,
                payload: err.response.data.error.message
            })
        })
    }

    return (
        <CategoryContext.Provider value={{
            categories: state.categories,
            addCategory,
            setCurrentCategory,
            currentCategory: state.current,
            clearCurrentCategory,
            editCategory,
            categoryError : state.error,
            getCategories,
            deleteCategory,
            isLoading: state.isLoading
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}