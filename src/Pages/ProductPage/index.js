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

    //DELETE PRODUCT
    const onSumbitSellerDelete = () =>{
      serviceProduct.DeleteProduct(id).then((res) => {
        if(res.status === 200){
          setNotifMessage("Berhasil Dihapus")
          setIsLoading(false)
          setShowNotif(true)
          setTimeout(() => {
            setShowNotif(false);
            setNotifMessage('') 
            preview.resetPreview();
            navigate('/')
          }, 1000);
        }else{
          setNotifMessage("Gagal Dihapus")
          setIsLoading(false)
          setShowNotif(true)
          setTimeout(() => {
            setShowNotif(false);
            setShowNotif('')
          }, 1000);}
    })}

    // DESKTOP BUYER
    const handleModalBuyerDesktop = () => {
        setShowModalDesktop((prev) => !prev)
    }
    // DESKTOP BUYER ADD OFFER
    const onSubmitBuyerModalDesktop = (value) =>{
      const dataSend ={
        userId : user?.id,
        productId: product?.id,
        priceNegotiated: value.PriceOffer, 
        status : ["waiting"]      
      }
      setIsLoading(true);
      ServiceOffer.AddOffer(dataSend).then((res) => {
        if (res.status === 201) {
          setIsLoading(false);
          setNotifMessage(res.data);
          toogleNotif();
          handleModalBuyerDesktop();
          setTimeout(() => {
            toogleNotif()
            setNotifMessage()
            navigate('/DaftarTawar')
          }, 2000);
        } else {
          setIsLoading(false)
          setNotifMessage("false");
          toogleNotif();
          setTimeout(() => {
            toogleNotif()
            setNotifMessage()
          }, 2000);}
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
    // DESKTOP SELLER ADD PRODUCT
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
      serviceProduct.AddNewData(dataSend).then((res) => {
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
            }, 1000);}
      })}


   // MOBILE
    const handleModalBuyerMobile = () => {
        setShowModalMobile((prev) => !prev)
    }  
  // DESKTOP BUYER ADD OFFER
    const onSubmitBuyerMobile = (value) =>{
      const dataSend ={
        userId : user?.id,
        productId: product?.id,
        priceNegotiated: value.PriceOffer, 
        status : [ "waiting"]      
      }
      setIsLoading(true);
      ServiceOffer.AddOffer(dataSend).then((res) => {
        if (res.status === 201) {
          setIsLoading(false);
          setNotifMessage("success");
          toogleNotif();
          handleModalBuyerMobile();
          setTimeout(() => {
            toogleNotif()
            setNotifMessage()
            navigate('/DaftarTawar')
          }, 2000);
        } else {
          console.log(res)
          setIsLoading(false)
          setNotifMessage("false");
          toogleNotif();
          setTimeout(() => {
            toogleNotif()
            setNotifMessage()
          }, 2000); }
      }).catch((err) =>{
        console.log(err)
        setIsLoading(false)
        setNotifMessage("Failed Error");
          toogleNotif();
          handleModalBuyerMobile();
          setTimeout(() => {
            toogleNotif()
            setNotifMessage()
          }, 2000);
    })}
    // DESKTOP SELLER ADD PRODUCT
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
    serviceProduct.AddNewData(dataSend).then((res) => {
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
    })}

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
    
      return () => {
        preview.resetPreview()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    

  return (
    <>
      <Loading show={isLoading} />
      { isDesktopOrLaptop &&  (
        <ProductPageDesktop
          user={user}
          product={product}
          role={role}
          showModal={showModalDesktop}
          handleModalBuyer={handleModalBuyerDesktop}
          showNotif={showNotif}
          notifMessage={notifMessage}
          toogleNotif={toogleNotif}
          onSubmitBuyerModalDesktop={onSubmitBuyerModalDesktop}
          onSubmitSellerModalDesktop={onSubmitSellerModalDesktop}
          onSumbitSellerDelete={onSumbitSellerDelete}
        />
      )}
      { isMobile && (
        <ProductPageMobile
          user={user}
          product={product}
          role={role}
          showModal={showModalMobile}
          handleModalBuyer={handleModalBuyerMobile}
          showNotif={showNotif}
          notifMessage={notifMessage}
          toogleNotif={toogleNotif}
          onSubmitSellerMobile={onSubmitSellerMobile}
          onSubmitBuyerMobile={onSubmitBuyerMobile}
          onSumbitSellerDelete={onSumbitSellerDelete}
        />
      )}
    </>
  )
}

export default ProductPage