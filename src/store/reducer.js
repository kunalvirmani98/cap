import { type } from "@testing-library/user-event/dist/type";

// Initial state
const initialState = {
    data: []
};

// Reducer function
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETDATA':
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};

// Action creators
export const setData = (payload) => ({
    type: 'SETDATA',
    payload
})

export default appReducer;