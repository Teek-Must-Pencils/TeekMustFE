import axios from "axios";

const ServiceWishlist = {
    async GetWishlist(){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accesToken

        const data = await axios({
            method:"GET",
            url: process.env.REACT_APP_BASE_URL+'api/wishlist/',
            headers:{
                "Authorization" : `Bearer ${token}`
            }
        }).then((response) => response)
        .catch((err) => err.response)

        return data
    },
    async GetWishlistById(id){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accesToken

        const data = await axios({
            method:"GET",
            url: process.env.REACT_APP_BASE_URL+`api/wishlist/${id}`,
            headers:{
                "Authorization" : `Bearer ${token}`
            }
        }).then((response) => response)
        .catch((err) => err.response)

        return data
    },
    async AddWishlist(value){
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken;
        let dataSend = new FormData();
        dataSend.append('id', null);
        dataSend.append('userId', value.userId);
        dataSend.append('productId', value.productId);
        const data = await axios({
            method:"POST",
            url: process.env.REACT_APP_BASE_URL+`api/wishlist/`,
            headers:{
                "Authorization" : `Bearer ${token}`
            }
        }).then((response) => response)
        .catch((err) => err.response)

        return data
    },

}

export default ServiceWishlist;