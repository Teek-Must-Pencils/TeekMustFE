import axios from 'axios';

// eslint-disable-next-line react-hooks/rules-of-hooks
const serviceProduct = {

    async GetAllProduct(){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'GET',
            url: process.env.REACT_APP_BASE_URL+'api/product',
            headers:{
                "Authorization" : `Bearer ${token}`,
            }
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    },

    async GetProductById(id){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'GET',
            url: process.env.REACT_APP_BASE_URL+`api/product/${id}`,
            headers:{
                "Authorization" : `Bearer ${token}`
            }
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    },

    async AddNewData(value){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const cate =  [value.category];
        let FormData = require('form-data');
        let dataSend = new FormData();
        dataSend.append('name', value.name);
        dataSend.append('categories', cate);
        dataSend.append('price', value.price);
        dataSend.append('description', value.description);
        dataSend.append("imgFile", value.imageFile);
        dataSend.append("seller", value.seller);
        dataSend.append("city", value.address);

        const data = await axios({
            method: 'POST',
            url: process.env.REACT_APP_BASE_URL+'api/product/',
            data: dataSend,
            headers:{
                "Authorization" : `Bearer ${token}`
            }

          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    }, 

    async EditProduct(value){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const cate =  [value.category];
        const price =  parseInt(value.price);
        const imgRaw =  value.image.toString();
        const imgRaw2 = imgRaw.split(',')[1]
        const dataSend ={
            id: value.id,
            name: value.name,
            categories: cate,
            price: price,
            description: value.description,
            seller: value.seller,
            city: value.address,
            img: imgRaw2,
        }

        // console.log('edit',dataSend)
        const data = await axios({
            method: 'PUT',
            url: process.env.REACT_APP_BASE_URL+'api/product/',
            data: dataSend,
            headers:{
                "Authorization" : `Bearer ${token}`
            }
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    },

    async DeleteProduct(id){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'DELETE',
            url: process.env.REACT_APP_BASE_URL+`api/product/${id}`,
            headers:{
                "Authorization" : `Bearer ${token}`
            }
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    },

    async SearchByName(name){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'GET',
            url: process.env.REACT_APP_BASE_URL+`api/product/name/${name}`,
            headers:{
                "Authorization" : `Bearer ${token}`
            }
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    },

    async SearchByCategory(category){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'GET',
            url: process.env.REACT_APP_BASE_URL+`api/product/category/${category}`,
            headers:{
                "Authorization" : `Bearer ${token}`
            }
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    },
}

export default serviceProduct;