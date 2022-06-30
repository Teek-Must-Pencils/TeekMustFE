import axios from 'axios';

const serviceNotification = {

    async getAllNotifiction(){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken

        const data = axios({
            method: "GET",
            url: process.env.REACT_APP_BASE_URL+'api/product/',
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response => response))
        .catch((err) => err.response)
        return data
    }
  
}

export default serviceNotification;