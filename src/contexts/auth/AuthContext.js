import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import setAuthToken from "../../utils/setAuthToken";
import { REGISTER_USER, REGISTER_FAIL, CLEAR_REGISTER_ERROR, LOAD_USER, LOAD_USER_ERROR, LOGIN_USER, LOGIN_USER_FAIL } from "../types";
import authReducer from "./authReducer";

export const AuthContext = createContext()

export default function AuthContextProvider(props) {

    const initialState = {
        token: localStorage.getItem('token'),
        user: null,
        isLoading: true,
        error: null,
        isAuthenticated: false
    }
    
    const [state, dispatch] = useReducer(authReducer, initialState)

    
    // Load User
    const loadUser = () =>{
        if(localStorage.token) {
            setAuthToken(localStorage.token)
        }
        axios.get(`${process.env.REACT_APP_BE}/api/auth`)
        .then( res => {
            dispatch({
                type: LOAD_USER,
                payload : res.data
            })
        })
        .catch( err => {
            console.log(err.response.data.error.message)
            dispatch({
                type: LOAD_USER_ERROR
            })
        })
    }

    // Register User
    const register = user => {
        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        }
        axios.post(`${process.env.REACT_APP_BE}/api/users`, user, config)
        .then( res => {
            console.log(res.data)
            dispatch({
                type: REGISTER_USER,
                payload: res.data
            })

            loadUser()
        })
        .catch( err => {
            console.log(err.response.data.error.message)
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.error.message
            })
        })
    }

    // Clear error
    const clearError = () => dispatch({ type: CLEAR_REGISTER_ERROR})

    // Login User
    const loginUser = (credentials) => {

        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        }

        axios.post(`${process.env.REACT_APP_BE}/api/auth`, credentials, config)
        .then( res => {
            console.log("success")
            console.log(res.data)
            dispatch({
                type: LOGIN_USER,
                payload: res.data
            })
            
            loadUser()
        })
        .catch( err => {
            console.log(err)
            dispatch({
                type: LOGIN_USER_FAIL,
                payload: err.response.data.error.message
            })
        })

    }

    useEffect(() => {
        loadUser()
    }, [])
    return (
        <AuthContext.Provider value={{
            register,
            error : state.error,
            clearError,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            loginUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}