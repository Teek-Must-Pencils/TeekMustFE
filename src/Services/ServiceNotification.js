import axios from 'axios';

const serviceNotification = {

    async getNotificationSeller(){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken

        const data = axios({
            method: "GET",
            url: process.env.REACT_APP_BASE_URL+'api/notification/seller',
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response => response))
        .catch((err) => err.response)
        return data
    },

    async getNotificationBuyer(){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken

        const data = axios({
            method: "GET",
            url: process.env.REACT_APP_BASE_URL+'api/notification/buyer',
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