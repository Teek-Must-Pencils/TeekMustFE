import axios from 'axios';

const ServiceOffer = {
    async GetOffer(){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'GET',
            url: process.env.REACT_APP_BASE_URL+'api/offer',
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })

        return data
    },

    async GetOfferById(id){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'GET',
            url: process.env.REACT_APP_BASE_URL+`api/offer/Offer/${id}`,
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })

        return data
    },

    async AddOffer(value){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        let dataSend = new FormData();
        dataSend.append('userId', value.userId);
        dataSend.append('productId', value.productId);
        dataSend.append('priceNegotiated', value.priceNegotiated);
        dataSend.append('status', value.status)
        const data = await axios({
            method: 'POST',
            url: process.env.REACT_APP_BASE_URL+'api/offer/save',
            data: dataSend,
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })

        return data
    },

    async UpdateOffer(value){
        const dataSend = new FormData();
        dataSend.append('id', value.id);
        dataSend.append('userId', value.userId);
        dataSend.append('productId', value.productId);
        dataSend.append('priceNegotiated', value.priceNegotiated);
        dataSend.append('priceNegotiated', value.priceNegotiated);
        dataSend.append('createdAt', value.createdAt);
        dataSend.append('status', value.status);
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'PUT',
            url: process.env.REACT_APP_BASE_URL+'api/offer/update',
            data: dataSend,
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })

        return data
    },
}

export default ServiceOffer