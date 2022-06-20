import { createSlice } from "@reduxjs/toolkit";
import { 
    registerAdmin, loginAdmin
} from "../action/authAction";

const initialState = {
    isLoggedIn: false,
    user: '',
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
            sessionStorage.removeItem('user')
        },
        setToken(state, action){
            const userData = JSON.parse(action.payload)
            state.token = userData?.access_token
            state.role = userData?.role
            state.user = userData?.email
            state.isLoggedIn = true
        },
        setOffShowMessage(state){
            state.showMessage = false
        },
        resetMessage(state){
            state.message = ''
        }
    },
    // extraReducers(builder) {
    //     // regis
    //     builder.addCase(registerAdmin.pending, (state, action) => {
    //         state.status = 'pending'
    //     })
    //     builder.addCase(registerAdmin.fulfilled, (state, action) => {
    //         state.showMessage = true
    //         state.message = "Register Success"
    //         state.status = 'success'
    //     })
    //     builder.addCase(registerAdmin.rejected, (state, action) => {
    //         state.status = 'reject'
    //         state.showMessage = true
    //         state.message = "Register Failed"
    //     })
    //     //login
    //     builder.addCase(loginAdmin.pending, (state, action) => {
    //         state.status = 'pending'
    //     })
    //     builder.addCase(loginAdmin.fulfilled, (state, action) => {
    //         if (action.payload?.access_token) {      
    //             state.isLoggedIn = true
    //             state.showMessage = true
    //             sessionStorage.setItem('user', JSON.stringify(action.payload))
    //             state.role = action.payload?.role
    //             state.user = action.payload?.email
    //             state.message = "Login Success"
    //             state.status = 'success'
    //         }
    //     })
    //     builder.addCase(loginAdmin.rejected, (state, action) => {
    //         state.status = 'reject'
    //         state.showMessage = true
    //         state.message = "Login Failed"
    //     })
    // }
})

// export const selectAuth = (state) => state.auth.isLoggedIn;
// export const selectRegister = (state) => state.auth.register;
// export const selectShowMessage = (state) => state.auth.showMessage;
// export const selectMessage = (state) => state.auth.message;
// export const selectStatus = (state) => state.auth.status;
// export const selectTest = (state) => state.auth.test;
// export const selectRole = (state) => state.auth.role;
// export const selectToken = (state) => state.auth.token;
export const authActions = authSlice.actions;

export default authSlice.reducer