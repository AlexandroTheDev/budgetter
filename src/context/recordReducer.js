export default function (state, action) {
    switch (action.type) {
        case "ADD_RECORD":
            return {
                ...state,
                records: [...state.records, action.payload]
            }
    
        default:
            return state;
    }
}