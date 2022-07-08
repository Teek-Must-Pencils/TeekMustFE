import axios from 'axios';

// eslint-disable-next-line react-hooks/rules-of-hooks
const serviceProduct = {

    async GetAllProduct(){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'get',
            url: process.env.REACT_APP_BASE_URL+'api/product/products',
            headers:{
                "Authorization" : `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    },

    async GeProductById(id){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'get',
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
        let FormData = require('form-data');
        let dataSend = new FormData();
        dataSend.append('name', value.name);
        dataSend.append('categories', value.category);
        dataSend.append('price', value.price);
        dataSend.append('description', value.description);
        dataSend.append("img", value.imageFile);
        dataSend.append("seller", value.seller);
        dataSend.append("city", value.city);

        // dataSend.forEach(element => {
        //     console.log(element)
        // });

        // console.log(token)
        const data = await axios({
            method: 'post',
            url: process.env.REACT_APP_BASE_URL+'api/product/',
            data: dataSend,
            headers:{
                "Authorization" : `Bearer ${token}`
            }

          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    }
}

export default serviceProduct;