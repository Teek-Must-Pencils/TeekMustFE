import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    price:'',
    category:'',
    description:'',
    image:File,
}
const previewSlice = createSlice({
    name: 'preview',
    initialState,
    reducers: {
        setPreview(state, action){
           state.name = action.payload.name
           state.price = action.payload.price
           state.category = action.payload.category
           state.description = action.payload.description
           state.image = action.payload.image
           state.form = action.payload.form
        },
    },
})

export const selectPreview = (state) => state.preview;
export const previewActions = previewSlice.actions

export default previewSlice.reducer