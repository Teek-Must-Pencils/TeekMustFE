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
import ServiceOffer from '../../Services/ServiceOffer';
import ServiceProfile from '../../Services/ServiecProfile';

const ProductPage = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});
    const navigate = useNavigate();
    const preview = usePreview();
    const { id } = useParams();
    const data = usePreview();
    const role = useSelector(selectRole);
    const [product, setProduct] = useState();
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [showModalDesktop, setShowModalDesktop] = useState(false);
    const [showModalMobile, setShowModalMobile] = useState(false);
    const [showNotif, setShowNotif] = useState(false);
    const [notifMessage, setNotifMessage] = useState(false);
    
    const toogleNotif = () =>{
      setShowNotif((prev) => !prev)
    } 

    // Desktop
    //buyer
    const handleModalBuyerDesktop = () => {
        setShowModalDesktop((prev) => !prev)
    }
    const onSubmitBuyerModalDesktop = (value) =>{
      console.log("DesktopBuyer", value)
      const dataSend ={
        userId : user?.id,
        productId: product?.id,
        priceNegotiated: value.PriceOffer, 
        createdAt: "2022-07-20T05:49:10.767Z",
        status : [
          "WAITING"
        ]      
      }
      // console.log(dataSend)
      setIsLoading(true);
      ServiceOffer.AddOffer(dataSend)
      .then((res) => {
        if (res.data === 200) {
          setNotifMessage("success");
          toogleNotif();
          handleModalBuyerDesktop();
          setTimeout(() => {
            toogleNotif()
            setNotifMessage()
          }, 2000);
        } else {
          console.log(res)
          setIsLoading(false)
          setNotifMessage("false");
          toogleNotif();
          setTimeout(() => {
            toogleNotif()
            setNotifMessage()
          }, 2000);
          // handleModalBuyerDesktop()
        }
      }).catch((err) =>{
        console.log(err)
        setIsLoading(false)
        setNotifMessage("Failed Error");
          toogleNotif();
          handleModalBuyerDesktop();
          setTimeout(() => {
            toogleNotif()
            setNotifMessage()
          }, 2000);
      })
    }
    //seller
    const onSubmitSellerModalDesktop = () =>{
      setIsLoading(true)
      const dataSend = {
          name: data.name,
          price: data.price,
          category: data.category,
          description: data.description,
          imageFile: data.imageFile,
          seller: data.seller,
          address: data.address
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
    // buyer
    const onSubmitBuyerMobile = (value) =>{
      console.log("MobileBuyer", value)
      const dataSend ={
        userId : user?.id,
        productId: product?.id,
        priceNegotiated: value.PriceOffer, 
        createdAt: "2022-07-20T05:49:10.767Z",
        status : [
          "WAITING"
        ]      
      }
      // console.log(dataSend)
      setIsLoading(true);
      ServiceOffer.AddOffer(dataSend)
      .then((res) => {
        if (res.data === 200) {
          setNotifMessage("success");
          toogleNotif();
          handleModalBuyerDesktop();
          setTimeout(() => {
            toogleNotif()
            setNotifMessage()
          }, 2000);
        } else {
          console.log(res)
          setIsLoading(false)
          setNotifMessage("false");
          toogleNotif();
          setTimeout(() => {
            toogleNotif()
            setNotifMessage()
          }, 2000);
          // handleModalBuyerDesktop()
        }
      }).catch((err) =>{
        console.log(err)
        setIsLoading(false)
        setNotifMessage("Failed Error");
          toogleNotif();
          handleModalBuyerDesktop();
          setTimeout(() => {
            toogleNotif()
            setNotifMessage()
          }, 2000);
      })
    }
    //seller
    const onSubmitSellerMobile = (value) =>{
      const dataSend = {
        name: data.name,
        price: data.price,
        category: data.category,
        description: data.description,
        imageFile: data.imageFile,
        seller: data.seller,
        address: data.address
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
    // console.log('MobileSeller',dataSend)
    }

    useEffect(() => {
      const user = sessionStorage.getItem('user');
      const username =JSON.parse(user).username;
      setIsLoading(true);
      Promise.allSettled([
        serviceProduct.GetProductById(id),
        ServiceProfile.getUserByUsername(username),
      ]).then(([product, user]) =>{
        setProduct(product.value.data);
        setUser(user.value.data)
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