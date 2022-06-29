// import React from 'react';
import axios from 'axios'

const ServiceinfoProfile = async(value) => {
    var FormData = require('form-data');
    var dataSend = new FormData();
    dataSend.append('username', value.Nama);
    dataSend.append('address', value.Address);
    dataSend.append('number', value.Numbers);

    const data = await axios({
        method: 'post',
        url: process.env.REACT_APP_BASE_URL+'api/auth/signup',
        data: dataSend
    })
    .then((response) => response)
    .catch((err) => err.response)

    return data
}

export default ServiceinfoProfile 