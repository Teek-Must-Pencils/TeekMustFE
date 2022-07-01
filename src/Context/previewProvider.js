import React, { useReducer } from 'react';
import PreviewContext from './previewContext';

const defaultPreviewState = {
    name:'',
    price:'',
    category:'',
    description:'',
    imageFile:'',
    image:''
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
        }
    }
}

const PreviewProvider = ({children}) => {
    const [previewState, dispatchPreviewAction] = useReducer(previewReducers, defaultPreviewState);

    const handlSetPreview = (value) => {
        dispatchPreviewAction({type: 'SETPREVIEW', payload: value})
    }

    const previewValue = {  
        name: previewState.name,
        price: previewState.price,
        category: previewState.category,
        description: previewState.description,
        imageFile: previewState.imageFile,
        image: previewState.image,
        setPreview: handlSetPreview
    }
  return (
    <PreviewContext.Provider value={previewValue}>
        {children}
    </PreviewContext.Provider>
  )
}

export default PreviewProvider