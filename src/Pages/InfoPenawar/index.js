import React from 'react'
import { useMediaQuery } from 'react-responsive';
import InfoPenawarDesktop from './Desktop/InfoPenawarDesktop';
import InfoPenawarMobile from './Mobile/InfoPenawarMobile';




const InfoPenawar = () => {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 426px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });

  return (
    <>
      {isDesktopOrLaptop && <InfoPenawarDesktop />}
      {isMobile && <InfoPenawarMobile />}
    </>
  )
}

export default InfoPenawar