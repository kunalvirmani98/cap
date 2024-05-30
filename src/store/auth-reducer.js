import { Dashboard } from "@mui/icons-material";

// Initial state
const initialState = {
    isLoggedIn: false
};

// Reducer function
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            // check
            //     email in database;
            // if (email)
            //     check password against stored password
            // if (password == okay)
            //     redirect to Dashboard;
            // else 
            //     redirect to login;
            break;
        case 'LOGOUT':
            break;
        default:
            return state;
    }
};

export const login = (payload) => ({
    type: 'LOGIN',
    payload
})

export const logout = (payload) => ({
    type: 'LOGOUT',
    payload
})


export default authReducer;