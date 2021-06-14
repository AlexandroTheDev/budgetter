import { useReducer } from "react";
import { createContext } from "react";
import recordReducer from "./recordReducer";

export const RecordContext = createContext()

export default function RecordContextProvider(props) {

    const initialState = {
        records : [
            {
                id: 1,
                category: "House",
                type: "income",
                amount: 300
            },
            {
                id: 2,
                category: "Part-Time",
                type: "income",
                amount: 869
            },
            {
                id: 3,
                category: "Rent",
                type: "income",
                amount: 1599
            },
            {
                id: 4,
                category: "Water",
                type: "expense",
                amount: 100
            },
            {
                id: 5,
                category: "Electricity",
                type: "expense",
                amount: 334
            },
            {
                id: 6,
                category: "Internet",
                type: "expense",
                amount: 1599
            },
        ]
    }

    const [state, dispatch] = useReducer(recordReducer, initialState)

    return(
        <RecordContext.Provider value={{
            records: state.records
        }}>
            {props.children}
        </RecordContext.Provider>
    )
}