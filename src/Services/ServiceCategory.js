import axios from 'axios';

const serviceCategory = {

    async GetAllCategory(){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        // console.log(token)

        const data = await axios({
            method: "GET",
            url: process.env.REACT_APP_BASE_URL+'api/category/',
            headers:{
                "Authorization" : `Bearer ${token}`,
                // 'Content-Type': 'application/json'
            }
        })
        .then((response) => response)
        .catch((err) => err.response)
        
      return data
    }
    
}

export default serviceCategory