import { ADD_RECORD, CLEAR_CURRENT_RECORD, DELETE_RECORD, EDIT_RECORD, GET_RECORDS, RECORD_ERROR, SET_CURRENT_RECORD, SET_RECORD_LOADING } from "../types";

export default function(state,action) {
    switch (action.type) {
        case GET_RECORDS:
            return {
                ...state,
                records: action.payload,
                isLoading: false
            }
        case ADD_RECORD:
            return {
                ...state,
                records : [...state.records, action.payload],
                isLoading: false
            }
        case SET_RECORD_LOADING:
            return {
                ...state,
                isLoading : true
            }
        case SET_CURRENT_RECORD:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT_RECORD:
            return {
                ...state,
                current: null
            }
        case EDIT_RECORD:
            return { 
                ...state,
                records: state.records.map( record => record._id === action.payload._id ? action.payload : record),
                isLoading : false
            }
        case DELETE_RECORD:
            return {
                ...state,
                records : state.records.filter( record => record._id !== action.payload._id),
                isLoading: false
            }
        case RECORD_ERROR: 
        
            return {
                ...state,
                isLoading : false
            }
        default:
            return state
    }
}