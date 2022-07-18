import { createSlice } from "@reduxjs/toolkit";
// import { 
//     login
// } from "../action/authAction";

const initialState = {
    search: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action){
            state.search = action.payload
        },
        resetSearch(state){
            state.search = ''
        },
    },
    extraReducers(builder) {}
})

export const selectSearch = (state) => state.search.search;
export const searchActions = searchSlice.actions;

export default searchSlice.reducer