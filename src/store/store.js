import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer.js';

const store = configureStore({
    reducer: appReducer,
    // Optionally, configure additional middleware and options here
});

export default store;