import React, { useState } from 'react';
import HomeDesktop from './Desktop/HomeDekstop';
import HomeMobile from './Mobile/HomeMobile';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});

  return (
    <>
      {isDesktopOrLaptop && (<HomeDesktop />)}
      {isMobile && (<HomeMobile />)}
    </>
  )
}

export default Home