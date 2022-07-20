import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Loading, NavbarMobile } from '../../Components';
import MyAccountDesktop from './Desktop/MyAccountDesktop';
import MyAccountMobile from './Mobile/MyAccountMobile';
import ServiecProfile from '../../Services/ServiecProfile'

const MyAccount = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
    const isMobile = useMediaQuery({query: '(max-width: 426px)'})
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState([]);

    useEffect(() => {
      const user = sessionStorage.getItem('user');
      const username =JSON.parse(user).username;
      console.log(user)
      setIsLoading(true);
      ServiecProfile.getUserByUsername(username)
      .then((res)=>{
        if (res.status === 200) {
          setUser(res.data);
          setIsLoading(false);
        } else {
          console.log(res)
          setIsLoading(false)
        }
      })
    
      // return () => {
      //   second
      // }
    }, [])
    
  return (
    <>
        <Loading show={isLoading} />
        { isDesktopOrLaptop &&  (<MyAccountDesktop user={user}/>) }
        { isMobile &&   (
          <>
            <NavbarMobile isSearch={false} location="Akun Saya" />
            <MyAccountMobile user={user}/>
          </>
          
        )}
    </>
  )
}

export default MyAccount