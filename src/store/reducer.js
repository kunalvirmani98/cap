import { type } from "@testing-library/user-event/dist/type";

// Initial state
const initialState = {
    data: [],

    // Filter data
    remote: [],
    minExperience: undefined,
    name: '',
    role: [],
    noOfEmployees: undefined,
    minBasePay: undefined
};

// Reducer function
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETDATA':
            return {
                ...state,
                data: action.payload
            };
        case 'ADDDATA':
            return {
                ...state,
                data: state.data.concat(action.payload)
            }
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
        case 'SETNAME':
            return {
                ...state,
                name: action.payload
            }
        case 'SETROLE':
            return {
                ...state,
                role: action.payload
            }
        case 'SETNOOFEMP':
            return {
                ...state,
                noOfEmployees: action.payload
            }
        case 'SETMINBASEPAY':
            return {
                ...state,
                minBasePay: action.payload
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

export const setRole = (payload) => ({
    type: 'SETROLE',
    payload
})

export const setNoOfEmployees = (payload) => ({
    type: 'SETNOOFEMP',
    payload
})

export const setMinExperience = (payload) => ({
    type: 'SETMINEXP',
    payload
})

export const setRemote = (payload) => ({
    type: 'SETREMOTE',
    payload
})

export const setMinBasePay = (payload) => ({
    type: 'SETMINBASEPAY',
    payload
})

export const setCompanyName = (payload) => ({
    type: 'SETNAME',
    payload
})

export const addData = (payload) => ({
    type: 'ADDDATA',
    payload
})

export default appReducer;