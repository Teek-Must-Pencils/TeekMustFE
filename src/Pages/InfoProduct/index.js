import React from 'react';
import { useMediaQuery } from 'react-responsive';
import InfoProductDesktop from './Dekstop/InfoProductDesktop';
import InfoProductMobile from './Mobile/InfoProductMobile';

const InfoProduct = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
    const isMobile = useMediaQuery({query: '(max-width: 426px)'});
    
    // Desktop
    const onSubmitSellerInput = (value) =>{
      console.log("desktopValueInput", value);
    }

  return (
    <>
      { isDesktopOrLaptop &&  (
        <InfoProductDesktop 
          onSubmitSellerInput={onSubmitSellerInput}
        />
      )}
      { isMobile && (
        <InfoProductMobile
        />
      )}
    </>
  )
}

export default InfoProduct