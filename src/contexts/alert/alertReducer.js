import { REMOVE_ALERT, SET_ALERT } from "../types";

export default function(state, action) {
    switch (action.type) {
        case SET_ALERT:
            return [...state, action.payload]
        case REMOVE_ALERT:
            return state.filter(error => action.payload !== error.id)
        default:
            return state;
    }
}