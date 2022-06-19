import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    price:'',
    category:'',
    description:'',
    image:''
}
const authSlice = createSlice({
    name: 'preview',
    initialState,
    reducers: {
        setPreview(state, action){
           state.name = action.payload.name
           state.price = action.payload.price
           state.category = action.payload.category
           state.description = action.payload.description
           state.image = action.payload.image
        },
    },
    // extraReducers(builder) {
        //login
        // builder.addCase(loginAdmin.pending, (state, action) => {
        //     state.status = 'pending'
        // })
        // builder.addCase(loginAdmin.fulfilled, (state, action) => {
        //     if (action.payload?.access_token) {      
        //         state.isLoggedIn = true
        //         state.showMessage = true
        //         sessionStorage.setItem('user', JSON.stringify(action.payload))
        //         state.role = action.payload?.role
        //         state.user = action.payload?.email
        //         state.message = "Login Success"
        //         state.status = 'success'
        //     }
        // })
        // builder.addCase(loginAdmin.rejected, (state, action) => {
        //     state.status = 'reject'
        //     state.showMessage = true
        //     state.message = "Login Failed"
        // })
    // }
})

export const selectAuth = (state) => state.auth.isLoggedIn;

export default authSlice.reducer