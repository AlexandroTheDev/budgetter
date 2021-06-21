import axios from "axios";
import { useReducer } from "react";
import { createContext } from "react";
import { ADD_RECORD, CLEAR_CURRENT_RECORD, DELETE_RECORD, EDIT_RECORD, GET_RECORDS, RECORD_ERROR, SET_CURRENT_RECORD, SET_RECORD_LOADING } from "../types";
import recordReducer from "./recordReducer";

export const RecordContext = createContext()

export default function RecordContextProvider(props) {

    const initialState = {
        records : [],
        error: null,
        isLoading: true
    }

    const [state, dispatch] = useReducer(recordReducer, initialState)

    // Add Record
    const addRecord = record => {
        setLoading()
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        axios.post(`${process.env.REACT_APP_BE}/api/records`,record, config)
        .then(res => {
            dispatch({
                type: ADD_RECORD,
                payload: res.data
            })
        })
        .catch( err => {
            dispatch({
                type: RECORD_ERROR,
                payload: err.response.data.error.message
            })
        })
    }

    // Get Records
    const getRecords = () => {
        setLoading()
        axios.get(`${process.env.REACT_APP_BE}/api/records`)
        .then( res => {
            dispatch({
                type: GET_RECORDS,
                payload: res.data
            })
        })
        .catch( err => {
            console.log(err)
            dispatch({
                type: RECORD_ERROR,
                payload: err.response.data.error.message
            })
        })
    }

    // Set Loading
    const setLoading = () => {
        dispatch({
            type: SET_RECORD_LOADING
        })
    }

    // Set Current
    const setCurrentRecord = record => {
        dispatch({
            type: SET_CURRENT_RECORD,
            payload: record
        })
    }

    const clearCurrentRecord = () => {
        dispatch({
            type: CLEAR_CURRENT_RECORD
        })
    }

    // Update Record
    const updateRecord = record => {
        setLoading()
        const config = {
            headers: {
                "Content-Type" :"application/json"
            }
        }
        axios.put(`${process.env.REACT_APP_BE}/api/records/${state.current._id}`,record, config)
        .then( res => {
            clearCurrentRecord()
            getRecords()
        })
        .catch( err => {
            console.log( err.response.data)
            dispatch({
                type: RECORD_ERROR,
                payload: err.response.data.error.message
            })
        })
    }

    // Delete Record
    const deleteRecord = record => {
        setLoading()
        axios.delete(`${process.env.REACT_APP_BE}/api/records/${record._id}`)
        .then( res => {
            getRecords()
        })
        .catch( err => {
            dispatch({
                type: RECORD_ERROR,
                payload: err.response.data.error.message
            })
        })
    }

    return(
        <RecordContext.Provider value={{
            records: state.records,
            addRecord,
            getRecords,
            isLoading: state.isLoading,
            setCurrentRecord,
            currentRecord : state.current,
            clearCurrentRecord,
            updateRecord,
            deleteRecord
        }}>
            {props.children}
        </RecordContext.Provider>
    )
}