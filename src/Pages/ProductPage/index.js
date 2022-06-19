import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import ProductPageDesktop from './Desktop/ProductPageDesktop';
import ProductPageMobile from './Mobile/ProductPageMobile';

const ProductPage = () => {
    const [showModalDesktop, setShowModalDesktop] = useState(false);
    const [showModalMobile, setShowModalMobile] = useState(false);
    const [showNotif, setShowNotif] = useState(false);
    const [notifMessage, setNotifMessage] = useState(false);
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
    const isMobile = useMediaQuery({query: '(max-width: 426px)'});

    const toogleNotif = () =>{
      setShowNotif((prev) => !prev)
    } 

    // desktop
    const handleModalBuyerDesktop = () => {
        setShowModalDesktop((prev) => !prev)
    }
    const onSubmitBuyerModalDesktop = (value) =>{
      console.log("DesktopBuyer", value)
      if(true){
        setNotifMessage("success");
        toogleNotif();
        handleModalBuyerDesktop();
        setTimeout(() => {
          toogleNotif()
          setNotifMessage()
        }, 2000);
      }
    }
    const onSubmitSellerModalDesktop = () =>{
      console.log('DestopSeller')
    }


    // mobile
    const onSubmitBuyerMobile = (value) =>{
      console.log("MobileBuyer", value)
      if(true){
        setNotifMessage("success");
        toogleNotif();
        handleModalBuyerMobile();
        setTimeout(() => {
          toogleNotif()
          setNotifMessage()
        }, 2000);
      }
    }
    const handleModalBuyerMobile = () => {
        setShowModalMobile((prev) => !prev)
    }  
    const onSubmitSellerMobile = (value) =>{
      console.log("MobileSeller")
    }


  return (
    <>
      { isDesktopOrLaptop &&  (
        <ProductPageDesktop 
          showModal={showModalDesktop}
          handleModalBuyer={handleModalBuyerDesktop}
          showNotif={showNotif}
          notifMessage={notifMessage}
          toogleNotif={toogleNotif}
          onSubmitBuyerModalDesktop={onSubmitBuyerModalDesktop}
          onSubmitSellerModalDesktop={onSubmitSellerModalDesktop}
        />
      )}
      { isMobile && (
        <ProductPageMobile
          showModal={showModalMobile}
          handleModalBuyer={handleModalBuyerMobile}
          showNotif={showNotif}
          notifMessage={notifMessage}
          toogleNotif={toogleNotif}
          onSubmitSellerMobile={onSubmitSellerMobile}
          onSubmitBuyerMobile={onSubmitBuyerMobile}
        />
      )}
    </>
  )
}

export default ProductPage