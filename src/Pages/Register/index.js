import React from 'react'
import { useMediaQuery } from 'react-responsive'
import RegisterDesktop from './RegisterPageDesktop/RegisterDesktop'
import RegisterMobile from './RegisterPageMobile/RegisterMobile'


const Register = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
    const isMobile = useMediaQuery({query: '(max-width: 426px)'})
  return (
    <>
        { isDesktopOrLaptop &&  <RegisterDesktop/>}
        { isMobile &&  <RegisterMobile/>}
    </>
  )
}

export default Register