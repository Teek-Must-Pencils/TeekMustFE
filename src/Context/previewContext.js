import React from 'react'

const previewContext = React.createContext({
    name:'',
    price:'',
    category:'',
    description:'',
    imageFile:'',
    image: undefined,
    seller:'',
    address:'',
    setPreview:()=>{},
    resetPreview:() => {}
})

export default previewContext