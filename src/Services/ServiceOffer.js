import axios from 'axios';

const ServiceOffer = {

    async AddOffer(value){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'POST',
            url: process.env.REACT_APP_BASE_URL+'api/offer/save',
            data: value,
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })

        return data
    },
    async AcceptOffer(value){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'PUT',
            url: process.env.REACT_APP_BASE_URL+'api/offer/update',
            data: value,
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })

        return data
    },
    async RejectOffer(value){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'PUT',
            url: process.env.REACT_APP_BASE_URL+'api/offer/update',
            data: value,
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })

        return data
    },
}

export default ServiceOffer