import React from 'react'
import { useMediaQuery } from 'react-responsive'
import ProductPageDesktop from './ProductPageDesktop/ProductPage'
import ProductPageMobile from './ProductPageMobile/ProductPage'

const ProductPage = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
    const isMobile = useMediaQuery({query: '(max-width: 426px)'})
  return (
    <>
        { isDesktopOrLaptop &&  <ProductPageDesktop/>}
        { isMobile &&  <ProductPageMobile/>}
    </>
  )
}

export default ProductPage