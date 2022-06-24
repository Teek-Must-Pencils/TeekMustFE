import React from 'react'
import { useMediaQuery } from 'react-responsive'
import LoginPageDesktop from './LoginPageDesktop/Login'
import LoginPageMobile from './LoginPageMobile/LoginMobile'

const ProductPage = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
    const isMobile = useMediaQuery({query: '(max-width: 426px)'})
  return (
    <>
        { isDesktopOrLaptop &&  <LoginPageDesktop/>}
        { isMobile &&  <LoginPageMobile/>}
    </>
  )
}

export default ProductPage