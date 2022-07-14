import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import ServiceProfile from '../../Services/ServiecProfile';
import InfoProfileDesktop from './InfoprofileDesktop/InfoProfileDesktop';
import InfoProfileMobile from './InfoProfileMobile/InfoProfileMobile';
import { selectUser } from '../../Redux/slice/authSlice';
import { Loading } from '../../Components';


const InfoProfile = () => {
    // const username = useSelector(selectUser);
    const [isLoading, setIsLoading] = useState(false);
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
    const isMobile = useMediaQuery({query: '(max-width: 426px)'})
    const [dataUser, setDataUser] = useState();

    useEffect(() => {
      // console.log('user', username)
      const user = sessionStorage.getItem('user');
      const username =JSON.parse(user).username;
      setIsLoading(true)
      ServiceProfile.getUserByUsername(username).then(
        (res) => {
          console.log(res)
          if (res.status === 200) {
            setDataUser(res.data)
            setIsLoading(false)
          }else{
            console.log(res)
            setIsLoading(false)
          }
        }
      )


      
      // setIsLoading(false);
      
    
      // return () => {
      //   second
      // }
    }, [])
    


  return (
    <>
        <Loading show={isLoading}  />
        { isDesktopOrLaptop &&  <InfoProfileDesktop userData={dataUser}/>}
        { isMobile &&  <InfoProfileMobile userData={dataUser}/>}
    </>
  )
}

export default InfoProfile