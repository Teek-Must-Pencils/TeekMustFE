import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slice/authSlice';
import searchReducer from "../slice/searchSlice";

const Store = configureStore({
    reducer:{
        auth: authReducer,
        search: searchReducer
    }
})

export default Store