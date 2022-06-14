import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slice/authSlice';

const Store = configureStore({
    reducer:{
        auth: authReducer,
    }
})

export default Store