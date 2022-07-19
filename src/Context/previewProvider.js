import React, { useReducer } from 'react';
import PreviewContext from './previewContext';

const defaultPreviewState = {
    name:'',
    price:'',
    category:'',
    description:'',
    imageFile:'',
    image: undefined,
    seller:'',
    address:'',
}

const previewReducers = (state, action) => {
    if(action.type === 'SETPREVIEW'){
        return{
            name: action.payload.name,
            price:action.payload.price,
            category:action.payload.category,
            description:action.payload.description,
            imageFile:action.payload.imageFile,
            image:action.payload.image,
            seller:action.payload.seller,
            address:action.payload.address,
        }
    }
    if(action.type === 'RESETPREVIEW'){
        return{
            name: '',
            price:'',
            category:'',
            description:'',
            imageFile:'',
            image:'',
            seller:'',
            address:'',
        }
    }
}

const PreviewProvider = ({children}) => {
    const [previewState, dispatchPreviewAction] = useReducer(previewReducers, defaultPreviewState);

    const handlSetPreview = (value) => {
        dispatchPreviewAction({type: 'SETPREVIEW', payload: value})
    }
    const handlResetPreview = () => {
        dispatchPreviewAction({type: 'RESETPREVIEW'})
    }

    const previewValue = {  
        name: previewState.name,
        price: previewState.price,
        category: previewState.category,
        description: previewState.description,
        imageFile: previewState.imageFile,
        image: previewState.image,
        seller: previewState.seller,
        address: previewState.address,
        setPreview: handlSetPreview,
        resetPreview : handlResetPreview
    }
  return (
    <PreviewContext.Provider value={previewValue}>
        {children}
    </PreviewContext.Provider>
  )
}

export default PreviewProvider