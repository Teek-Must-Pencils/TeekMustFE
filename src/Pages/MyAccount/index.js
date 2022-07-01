import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavbarMobile } from '../../Components';
import MyAccountDesktop from './Desktop/MyAccountDesktop';
import MyAccountMobile from './Mobile/MyAccountMobile';

const MyAccount = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
    const isMobile = useMediaQuery({query: '(max-width: 426px)'})
  return (
    <>
        { isDesktopOrLaptop &&  (<MyAccountDesktop/>) }
        { isMobile &&   (
          <>
            <NavbarMobile isSearch={false} location="Akun Saya" />
            <MyAccountMobile/>
          </>
          
        )}
    </>
  )
}

export default MyAccount