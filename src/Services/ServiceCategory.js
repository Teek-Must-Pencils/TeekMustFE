import axios from 'axios';

const serviceCategory = {

    async getAllCategory(){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken

        const data = await axios({
            method: "GET",
            url: process.env.REACT_APP_BASE_URL+'api/category/products',
            headers:{
                "Authorization" : `Bearer ${token}`
            }
        })
        .then((response) => response)
        .catch((err) => err.response)
        
      return data
    }
    
}

export default serviceCategory