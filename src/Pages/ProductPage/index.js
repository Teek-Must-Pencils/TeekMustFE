import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import usePreview from '../../Hooks/usePreview';
import serviceProduct from '../../Services/ServiceProduct';
import ProductPageDesktop from './Desktop/ProductPageDesktop';
import ProductPageMobile from './Mobile/ProductPageMobile';
import { selectRole } from '../../Redux/slice/authSlice';
import { useParams } from 'react-router-dom';
import { Loading } from '../../Components';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});
    const navigate = useNavigate();
    const preview = usePreview();
    const { id } = useParams();
    const data = usePreview();
    const role = useSelector(selectRole);
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [showModalDesktop, setShowModalDesktop] = useState(false);
    const [showModalMobile, setShowModalMobile] = useState(false);
    const [showNotif, setShowNotif] = useState(false);
    const [notifMessage, setNotifMessage] = useState(false);
    

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
      setIsLoading(true)
      const dataSend = {
          name: data.name,
          price: data.price,
          category: data.category,
          description: data.description,
          imageFile: data.imageFile,
          seller: data.seller,
          city: data.address
      }
      serviceProduct.AddNewData(dataSend).then(
        (res) => {
          if(res.status === 201){
            setNotifMessage(res.data)
            setIsLoading(false)
            setShowNotif(true)
            setTimeout(() => {
              setShowNotif(false);
              setNotifMessage('') 
              preview.resetPreview();
              navigate('/')
            }, 1000);
          }else{
            setNotifMessage("Gagal Input")
            setIsLoading(false)
            setShowNotif(true)
            setTimeout(() => {
              setShowNotif(false);
              setShowNotif('')
            }, 1000);
          }
        }
      )
      // console.log('DesktopSeller',dataSend)
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
        seller: data.seller,
        city: data.address
    }
    // serviceProduct.AddNewData(dataSend).then(
    //   (res) => console.log('res',res)
    // )
    console.log('MobileSeller',dataSend)
    }

    useEffect(() => {
      setIsLoading(true);
      Promise.allSettled([
        serviceProduct.GetProductById(id),
      ]).then(([product]) =>{
        setProduct(product.value.data);
        setIsLoading(false)
      }).catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
    
      // return () => {
      //   second
      // }
    }, [id])
    

  return (
    <>
      <Loading show={isLoading} />
      { isDesktopOrLaptop &&  (
        <ProductPageDesktop 
          product={product}
          role={role}
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
          product={product}
          role={role}
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