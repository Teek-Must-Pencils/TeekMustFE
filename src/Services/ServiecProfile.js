import axios from 'axios';

const ServiceProfile = {

  async UpdateProfile(value) {
    const sessionData = sessionStorage.getItem('user')
    const dt = JSON.parse(sessionData)
    const token = dt.accessToken
    let FormData = require('form-data');
    let dataSend = new FormData();
    dataSend.append('id', value.id)
    dataSend.append('address', value.address)
    dataSend.append('number', value.number)

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

  }

  // async EditUser(email, value){
  //   const sessionData = sessionStorage.getItem('user')
  //   const dt = JSON.parse(sessionData);
  //   const token = dt.accessToken
  //   const data = await axios({
  //       method: 'POST',
  //       url: process.env.REACT_APP_BASE_URL+`api/product/${email}`,
  //       headers:{
  //           "Authorization" : `Bearer ${token}`
  //       },
  //       data: value
  //     })
  //     .then((response) => response)
  //     .catch((err) => err.response)
   
  //     return data
  // }
}

export default ServiceProfile