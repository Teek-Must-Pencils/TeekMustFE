// import React from 'react';
import axios from 'axios'

const ServiceRegister = async(value) => {
    var FormData = require('form-data');
    var dataSend = new FormData();
    dataSend.append('username', value.username);
    dataSend.append('password', value.password);
    dataSend.append('email', value.email);
    dataSend.append('address', value.address);
    dataSend.append('number', value.number);
    dataSend.append('img', value.image);
    dataSend.append('role', 'buyer');

    const data = await axios({
        method: 'post',
        url: process.env.REACT_APP_BASE_URL+'/api/auth/signup',
        data: dataSend
    })
    .then((response) => response)
    .catch((err) => err.response)

    return data
}

export default ServiceRegister