import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer.js';

export default configureSTore({
    reducer: appReducer
})