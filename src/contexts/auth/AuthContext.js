import axios from "axios";
import { useReducer, createContext } from "react";
import setAuthToken from "../../utils/setAuthToken";
import { AUTH_ERROR, CLEAR_ERRORS, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED } from "../types";
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
    const loadUser = () =>{
        if(localStorage.token) {
            setAuthToken(localStorage.token)
        }

        axios.get(`${process.env.REACT_APP_BE}/api/auth`)
        .then( res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })

        })
        .catch( err => {
            dispatch({
                type: AUTH_ERROR,
                payload: err.response.data.error.message
            })
        })
    }

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
            
            loadUser()
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
    const clearErrors = () => dispatch({
        type: CLEAR_ERRORS
    })

    return(
        <AuthContext.Provider value={{
            token: state.token,
            user: state.user,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            register,
            clearErrors
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider