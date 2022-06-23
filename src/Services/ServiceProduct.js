import axios from 'axios';

const serviceProduct = {

    async GetAllData(){
        const data = await axios({
            method: 'get',
            url: process.env.REACT_APP_BASE_URL+'api/product/products',
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    },

    async AddNewData(value){
        let FormData = require('form-data');
        let dataSend = new FormData();
        dataSend.append('id', 0);
        dataSend.append('productName', value.name);
        dataSend.append('categories', value.category);
        dataSend.append('price', value.price);
        dataSend.append('description', value.description);
        dataSend.append("img", value.imageFile);
        dataSend.append("seller", value.seller);
        dataSend.append("city", value.city);

        // dataSend.forEach(element => {
        //     console.log(element)
        // });

        const data = await axios({
            method: 'post',
            url: process.env.REACT_APP_BASE_URL+'api/product/',
            data: dataSend
          })
          .then((response) => response)
          .catch((err) => err.response)
       
          return data
    }
}

export default serviceProduct;