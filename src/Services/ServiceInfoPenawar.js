import axios from 'axios';

const ServiceInfoPenawar = {

    async getUserByEmail(email) {
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'get',
            url: process.env.REACT_APP_BASE_URL + `api/product/${email}`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((response) => response)
            .catch((err) => err.response)

        return data
    },

    async EditUser(email, value) {
        const sessionData = sessionStorage.getItem('user')
        const dt = JSON.parse(sessionData);
        const token = dt.accessToken
        const data = await axios({
            method: 'POST',
            url: process.env.REACT_APP_BASE_URL + `api/product/${email}`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
            data: value
        })
            .then((response) => response)
            .catch((err) => err.response)

        return data
    }
}