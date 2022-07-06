import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'
import ServiceProfile from '../../Services/ServiecProfile'
import InfoProfileDesktop from './InfoprofileDesktop/InfoProfileDesktop'
import InfoProfileMobile from './InfoProfileMobile/InfoProfileMobile'


const InfoProfile = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
    const isMobile = useMediaQuery({query: '(max-width: 426px)'})
    const username = useSelector((state) => state.auth.user)
    // const [dataUser, setDataUser] = useState(second)

  const dataUser = {
    name: "coba"
  }


  console.log('user', username)
    useEffect(() => {
      // ServiceProfile.getUserByUsername(username)
      // .then((res) => {
      //   if(res.status === 200){
      //     setDataUser(res.data)
      //   }else{
      //     console.log('errr', error)
      //   }
      //   console.log(res)
      // })
      
    
      // return () => {
      //   second
      // }
    }, [username])
    


  return (
    <>
        { isDesktopOrLaptop &&  <InfoProfileDesktop userData={dataUser}/>}
        { isMobile &&  <InfoProfileMobile userData={dataUser}/>}
    </>
  )
}

export default InfoProfile