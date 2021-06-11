import { useReducer, createContext } from "react"
import recordReducer from './recordReducer'
import {v4} from 'uuid'

export const RecordContext = createContext()

export default function RecordContextProvider(props) {
    
    const initialState = {
        records: [
            {
                _id: 1,
                category: {
                    name: "House"
                },
                type: "expense",
                amount: 300
            },
            {
                _id: 2,
                category: {
                    name: "Electricity"
                },
                type: "expense",
                amount: 500
            },
            {
                _id: 3,
                category: {
                    name: "Water"
                },
                type: "expense",
                amount: 200
            },
            {
                _id: 4,
                category: {
                    name: "Rent"
                },
                type: "income",
                amount: 200
            },
            {
                _id: 5,
                category: {
                    name: "Business"
                },
                type: "income",
                amount: 700
            },
            {
                _id: 6,
                category: {
                    name: "Part-Tome"
                },
                type: "income",
                amount: 800
            },
        ]
    }

    const [state, dispatch] = useReducer(recordReducer, initialState)

    // Add Record
    const addRecord = record => {
        record.id = v4()
        dispatch({ type: "ADD_RECORD", payload: record})
    }

    return(
        <RecordContext.Provider value={{
            records: state.records,
            addRecord
        }}>
            {props.children}
        </RecordContext.Provider>
    )
}