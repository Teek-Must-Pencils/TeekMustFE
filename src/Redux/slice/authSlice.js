import { createSlice } from "@reduxjs/toolkit";
import { 
    login
} from "../action/authAction";

const initialState = {
    isLoggedIn: false,
    user: '',
    email: '',
    token:'',
    showMessage: false,
    status:'',
    role:'',
    message:'',
    test:''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isLoggedIn = false;
            state.token = ''
            state.role = ''
            state.user = ''
            state.email = ''
            sessionStorage.removeItem('user')
        },
        setToken(state, action){
            if(state.token === ''){
                state.token = action.payload?.accessToken
                state.role = action.payload?.roles
                state.user = action.payload?.username
                state.email = action.payload?.email
                state.isLoggedIn = true
            }
            
        },
        setOffShowMessage(state){
            state.showMessage = false
        },
        resetMessage(state){
            state.message = ''
        }
    },
    extraReducers(builder) {
        //login
        builder.addCase(login.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(login.fulfilled, (state, action) => {
            // state.test = action.payload
            if (action.payload?.accessToken) {      
                state.isLoggedIn = true
                state.showMessage = true
                state.token = action.payload?.accessToken
                sessionStorage.setItem('user', JSON.stringify(action.payload))
                state.role = action.payload?.roles
                state.user = action.payload?.username
                state.email = action.payload?.email
                state.message = "Login Success"
                state.status = 'success'
            }
        })
        builder.addCase(login.rejected, (state, action) => {
            // state.test = action.error.message
            state.status = 'reject'
            state.showMessage = true
            state.message = action.error.message
        })
    }
})

export const selectTest = (state) => state.auth.test;
// export const selectShowMessage = (state) => state.auth.showMessage;
export const selectAuth = (state) => state.auth.isLoggedIn;
export const selectMessage = (state) => state.auth.message;
export const selectStatus = (state) => state.auth.status;
export const selectRole = (state) => state.auth.role;
export const selectToken = (state) => state.auth.token;
export const selectEmail = (state) => state.auth.email;
export const selectUser = (state) => state.auth.user;
export const authActions = authSlice.actions;

export default authSlice.reducer