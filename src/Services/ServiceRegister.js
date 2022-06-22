// import React from 'react';
import axios from 'axios'

const ServiceRegister = async(value) => {
    var FormData = require('form-data');
    var dataSend = new FormData();
    dataSend.append('username', value.Nama);
    dataSend.append('password', value.Password);
    dataSend.append('email', value.Email);
    dataSend.append('address', value.Address);
    dataSend.append('number', value.Numbers);
    dataSend.append('roles', value.Role);
    dataSend.append('img', value.imageFile);

    const data = await axios({
        method: 'post',
        url: process.env.REACT_APP_BASE_URL+'api/auth/signup',
        data: dataSend
    })
    .then((response) => response)
    .catch((err) => err.response)

    return data
}

export default ServiceRegister