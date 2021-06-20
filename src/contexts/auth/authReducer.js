import { REGISTER_USER, REGISTER_FAIL, CLEAR_REGISTER_ERROR, LOAD_USER_ERROR, LOAD_USER, LOGIN_USER, LOGIN_USER_FAIL, LOGOUT_USER } from "../types";

export default function(state,action) {
    switch (action.type) {
        case REGISTER_USER:
        case LOGIN_USER:
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                isLoading: false
            }
        case LOAD_USER:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case REGISTER_FAIL:
        case LOAD_USER_ERROR:
        case LOGIN_USER_FAIL:
        case LOGOUT_USER:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                user: null,
                isLoading: false,
                isAuthenticated: false,
                error: action.payload
            }
        case CLEAR_REGISTER_ERROR:
            return {
                ...state,
                error: null
            }
            
        default:
            return state;
    }
}