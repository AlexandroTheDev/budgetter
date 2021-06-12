import { createContext, useReducer } from "react";
import { v4 as uuid } from 'uuid';
import { REMOVE_ALERT, SET_ALERT } from "../types";
import alertReducer from './alertReducer';


export const AlertContext = createContext()

const AlertContextProvider = (props) => {

    const initialState = []

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // Set Alert
    const setAlert = (message, type, timeout = 5000) =>{
        const id = uuid();
        dispatch({
            type: SET_ALERT,
            payload: {id, message, type}
        })

        setTimeout( ()=> dispatch({ type: REMOVE_ALERT, payload:id}), timeout)
    }

    return(
        <AlertContext.Provider value={{
            alerts : state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertContextProvider