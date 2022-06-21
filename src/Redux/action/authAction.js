import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//URL
const login_URL = process.env.REACT_APP_BASE_URL+'api/auth/login'

//login
const login = createAsyncThunk('auth/login', async (initialPost) => {
    const response = await axios.post(login_URL, initialPost)
    return response.data
})

export { 
    login
};