import axios from "axios";
import { useReducer, createContext } from "react";
import { REGISTER_FAIL, REGISTER_SUCCESS } from "../types";
import authReducer from './authReducer';

export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const initialState = {
        token: localStorage.getItem("token"),
        user: null,
        isAuthenticated: null,
        loading: true,
        error: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    // Load User

    // Register User
    const register = credentials =>{
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        axios.post(`${process.env.REACT_APP_BE}/api/users`, credentials, config)
        .then( res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch( err =>{
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.error.message
            })
        })

    }
    // Login User

    // Logout

    // Clear Errors

    return(
        <AuthContext.Provider value={{
            token: state.token,
            user: state.user,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            register,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider