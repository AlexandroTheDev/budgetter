import { ADD_CATEGORY, CATEGORY_ERROR, CLEAR_CURRENT_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, GET_CATEGORIES, SET_CURRENT_CATEGORY, SET_LOADING } from "../types";

export default function (state,action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                isLoading : false
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload],
                isLoading : false
            }
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                current: state.categories.find( category => category._id === action.payload),
                isLoading : false
            }
        case CLEAR_CURRENT_CATEGORY:
            return {
                ...state,
                current: null,
                isLoading : false
            }
        case EDIT_CATEGORY:
            return {
                ...state,
                categories: state.categories.map( category => action.payload.id === category._id ? action.payload : category),
                isLoading : false
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter( category => category._id !== action.payload ),
                current: null,
                isLoading : false
            }
        case CATEGORY_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading : false
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            } 
        default:
            return state;
    }
}