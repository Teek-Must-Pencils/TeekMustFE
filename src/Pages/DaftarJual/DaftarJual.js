import React, { useState } from 'react';
import DaftarJualDesktop from './Desktop/DaftarJualDesktop';
import DaftarJualMobile from './Mobile/DaftarJualMobile';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});

  return (
    <>
      {isDesktopOrLaptop && (<DaftarJualDesktop />)}
      {isMobile && (<DaftarJualMobile />)}
    </>
  )
}

export default Home