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


    //LocalStorage or SessionStorage 
    async GetWishlistLocal(){
        // const oldData = JSON.parse(localStorage.getItem('wishlist'))
        const oldData = JSON.parse(sessionStorage.getItem('wishlist'))
        return oldData
    },
    async AddWishlistLocal(value){
        // const oldData = JSON.parse(localStorage.getItem('wishlist'))
        const oldData = JSON.parse(sessionStorage.getItem('wishlist'))
        let newData = [];
        if(oldData === null){
            newData.push(value);
        }else{
            newData = [...oldData,value];
        }
        // localStorage.setItem('wishlist', JSON.stringify(newData))
        sessionStorage.setItem('wishlist', JSON.stringify(newData))
        return "Add To Diminati"
    },
    async DeleteWishlistLocal(value){
        // const oldData = JSON.parse(localStorage.getItem('wishlist'))
        const oldData = JSON.parse(sessionStorage.getItem('wishlist'))
        let newData = [];
        if(oldData === null){
        }else{
            // eslint-disable-next-line array-callback-return
            oldData.map((v) => {if(v !== value){ newData.push(v)}})
        }
        // localStorage.setItem('wishlist', JSON.stringify(newData))
        sessionStorage.setItem('wishlist', JSON.stringify(newData))
        window.location.reload()
        return "Dihapus dari Daftar Minat Anda"
    },

}

export default ServiceWishlist;