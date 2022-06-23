import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import usePreview from '../../Hooks/usePreview';
import serviceProduct from '../../Services/ServiceProduct';
import ProductPageDesktop from './Desktop/ProductPageDesktop';
import ProductPageMobile from './Mobile/ProductPageMobile';

const ProductPage = () => {
    const data = usePreview();
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
      const dataSend = {
          name: data.name,
          price: data.price,
          category: data.category,
          description: data.description,
          imageFile: data.imageFile,
          // image: data.image,
          seller: "SellerTiga",
          city: "New York"
      }
      serviceProduct.AddNewData(dataSend).then(
        (res) => console.log('res',res)
      )
      console.log('DesktopSeller',dataSend)
    }


    // mobile
    const handleModalBuyerMobile = () => {
        setShowModalMobile((prev) => !prev)
    }  
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
    const onSubmitSellerMobile = (value) =>{
      const dataSend = {
        name: data.name,
        price: data.price,
        category: data.category,
        description: data.description,
        imageFile: data.imageFile,
        // image: data.image,
        seller: "SellerTiga",
        city: "New York"
    }
    serviceProduct.AddNewData(dataSend).then(
      (res) => console.log('res',res)
    )
    console.log('MobileSeller',dataSend)
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