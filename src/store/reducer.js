import { type } from "@testing-library/user-event/dist/type";

// Initial state
const initialState = {
    data: [],

    // Filter data
    remote: [],
};

// Reducer function
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETDATA':
            return {
                ...state,
                data: action.payload
            };
        case 'SETREMOTE':
            return {
                ...state,
                remote: action.payload
            }
        default:
            return state;
    }
};

// Action creators
export const setData = (payload) => ({
    type: 'SETDATA',
    payload
})

export const setRemote = (payload) => ({
    type: 'SETREMOTE',
    payload
})

export default appReducer;