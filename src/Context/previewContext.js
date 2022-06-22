import React from 'react'

const previewContext = React.createContext({
    name:'',
    price:'',
    category:'',
    description:'',
    imageFile:'',
    image:'',
    setPreview:()=>{}
})

export default previewContext