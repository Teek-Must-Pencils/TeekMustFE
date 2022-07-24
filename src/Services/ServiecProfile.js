import axios from 'axios';

const ServiceProfile = {

  async GetAllUser(){
    const sessionData = sessionStorage.getItem('user')
    const dt = JSON.parse(sessionData);
    const token = dt.accessToken
    const data = await axios({
        method: 'GET',
        url: process.env.REACT_APP_BASE_URL+'api/user',
        headers:{
            "Authorization" : `Bearer ${token}`
        }

      })
      .then((response) => response)
      .catch((err) => err.response)
   
      return data
  },

  async UpdateProfile(value) {
    const sessionData = sessionStorage.getItem('user')
    const dt = JSON.parse(sessionData)
    const token = dt.accessToken
    const imgRaw =  value.image.toString();
    const imgRaw2 = imgRaw.split(',')[1]
    let FormData = require('form-data');
    let dataSend = new FormData();
    dataSend.append('id', value.id)
    // dataSend.append('name', value.name)
    dataSend.append('address', value.address)
    dataSend.append('number', value.number)
    dataSend.append('img', imgRaw2)

    console.log('dataSend', dataSend)
    const data = await axios({
      method: 'PUT',
      url: process.env.REACT_APP_BASE_URL+`api/profile`,
      headers : {
        'Authorization' : `Bearer ${token}`,
      },
      data: dataSend
    })
    .then((response) => response)
    .catch((err) => err.response)

    return data

  },

  async getUserByUsername(username){
    const sessionData = sessionStorage.getItem('user')
    const dt = JSON.parse(sessionData);
    const token = dt.accessToken
    const data = await axios({
        method: 'GET',
        url: process.env.REACT_APP_BASE_URL+`api/user/username/${username}`,
        headers:{
            "Authorization" : `Bearer ${token}`
        }

      })
      .then((response) => response)
      .catch((err) => err.response)
   
      return data
  }
}

export default ServiceProfile