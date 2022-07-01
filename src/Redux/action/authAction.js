import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//URL
const login_url = process.env.REACT_APP_BASE_URL+'api/auth/login'

//login
const login = createAsyncThunk('auth/Login', async (initialPost) => {
    const response = await axios.post(login_url, initialPost)
    return response.data
})

export { 
    login
};