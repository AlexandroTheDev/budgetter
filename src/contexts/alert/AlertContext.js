import { createContext, useReducer } from "react";
import alertReducer from "./alertReducer";
import { v4 as uuid } from "uuid";
import { REMOVE_ALERT, SET_ALERT } from "../types";

export const AlertContext = createContext()

export default function AlertContextProvider(props) {

    const initialState = []
    
    const [state, dispatch] = useReducer(alertReducer, initialState)

    // Set Alert
    const setAlert = (message, type, timeout = 5000) =>{
        const id = uuid()
        dispatch({
            type: SET_ALERT,
            payload: { message, id, type}
        })

        setTimeout(() =>{
            dispatch({
                type: REMOVE_ALERT,
                payload: id
            })
        }, timeout)

    }

    return (
        <AlertContext.Provider value={{
            alerts : state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}