import { type } from "@testing-library/user-event/dist/type";

// Initial state
const initialState = {
    data: [],

    // Filter data
    remote: [],
    minExperience: undefined,
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
            };
        case 'SETMINEXP':
            return {
                ...state,
                minExperience: action.payload
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

export const setRemote = (payload) => ({
    type: 'SETREMOTE',
    payload
})

export const setMinExperience = (payload) => ({
    type: 'SETMINEXP',
    payload
})

export default appReducer;