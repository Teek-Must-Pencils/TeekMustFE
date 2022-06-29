import React from 'react';
import HomeDesktop from './Desktop/HomeDekstop';
import HomeMobile from './Mobile/HomeMobile';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux'
import { selectRole } from '../../Redux/slice/authSlice';
import { NavbarMobile } from '../../Components';

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});
  const role = useSelector(selectRole);

  return (
    <>
      {isDesktopOrLaptop && (<HomeDesktop role={role} />)}
      {isMobile && (
        <>      
          <NavbarMobile />
          <HomeMobile role={role} />
        </>
      )}
    </>
  )
}

export default Home