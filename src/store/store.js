import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer.js';
import authReducer from './auth-reducer.js';

const store = configureStore({
    reducer: appReducer,
    authReducer
});

export default store;