import { REGISTER_USER, REGISTER_FAIL, CLEAR_REGISTER_ERROR, LOAD_USER_ERROR, LOAD_USER } from "../types";

export default function(state,action) {
    switch (action.type) {
        case REGISTER_USER:
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
                ...action.payload
            }
        case REGISTER_FAIL:
        case LOAD_USER_ERROR:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                user: null,
                isLoading: true,
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