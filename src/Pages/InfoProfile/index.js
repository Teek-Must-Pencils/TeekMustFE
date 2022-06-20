import React from 'react'
import { useMediaQuery } from 'react-responsive'
import InfoProfileDesktop from './InfoprofileDesktop/InfoProfileDesktop'
import InfoProfileMobile from './InfoProfileMobile/InfoProfileMobile'


const InfoProfile = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
    const isMobile = useMediaQuery({query: '(max-width: 426px)'})
  return (
    <>
        { isDesktopOrLaptop &&  <InfoProfileDesktop/>}
        { isMobile &&  <InfoProfileMobile/>}
    </>
  )
}

export default InfoProfile