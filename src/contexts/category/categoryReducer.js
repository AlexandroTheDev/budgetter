import { ADD_CATEGORY, CLEAR_CURRENT_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, SET_CURRENT_CATEGORY } from "../types";

export default function (state,action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                current: state.categories.find( category => category.id === action.payload)
            }
        case CLEAR_CURRENT_CATEGORY:
            return {
                ...state,
                current: null
            }
        case EDIT_CATEGORY:
            return {
                ...state,
                categories: state.categories.map( category => action.payload.id === category.id ? action.payload : category)
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter( category => category.id !== action.payload )
            }
        default:
            return state;
    }
}