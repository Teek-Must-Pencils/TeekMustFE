import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import InfoPenawarDesktop from './Desktop/InfoPenawarDesktop';
import InfoPenawarMobile from './Mobile/InfoPenawarMobile';
import ServiceOffer from '../../Services/ServiceOffer';
import ServiceProduct from '../../Services/ServiceProduct';
import ServiceProfile from '../../Services/ServiecProfile';
import { Loading, ModalNotification } from '../../Components';
import { useParams } from 'react-router-dom';




const InfoPenawar = () => {
  const { id } = useParams()
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 426px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });
  const [isLoading, setIsLoading] = useState();
  const [isAccepted, setIsAccepted] = useState(true);
  const [isNotification, setIsNotification] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalStatusShow, setModalStatusShow] = useState(false);
  const [message, setMessage] = useState();
  const [offer, setOffer] = useState([]);
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);

    const handleNotification =()=>{
      setIsNotification((prev) => setIsNotification(!prev));
    }
    const handleModalOpen = () => {
        setModalShow(true)
        handleIsAccepted()
    }

    const handleModalStatusOpen = () => {
        setModalStatusShow(true)
        handleIsAccepted()
    }

    const handleModalClosed = () => {
        setModalShow(false)
    }
    const handleModalShowClosed = () => {
        setModalStatusShow(false)
    }

    const handleIsAccepted = () => {
        setIsAccepted(false)//ganti button
    }

  const onSumbitAccept= () =>{
    setIsLoading(true);
    const dataSend ={
      id: offer?.id,
      userId: offer?.userId, 
      productId: offer?.productId,
      priceNegotiated: offer?.priceNegotiated,
      status: [
        "ACCEPTED"
      ]
    }
    ServiceOffer.UpdateOffer(dataSend)
    .then((res) =>{
      if (res.status === 200){
        setMessage('Terima Tawaran Berhasil');
        setIsLoading(false);
        setIsNotification(true);
        setTimeout(() => {
          setIsNotification(false);
          setMessage('')
          window.location.reload();
        }, 1000);
      }else{
        console.log(res.message)
        setMessage(res.message);
        setIsLoading(false);
        setIsNotification(true);
        setTimeout(() => {
          setIsNotification(false);
          setMessage('')
        }, 1000);
      }
    }).catch((err) =>{
      console.log(err.message);
      setMessage(err.message);
        setIsLoading(false);
        setIsNotification(true);
        setTimeout(() => {
          setIsNotification(false);
          setMessage('')
        }, 1000);
    })
  }

  const onSumbitReject= () =>{
    setIsLoading(true);
    const dataSend ={
      id: offer?.id,
      userId: offer?.userId, 
      productId: offer?.productId,
      priceNegotiated: offer?.priceNegotiated,
      status: [
        "REJECTED"
      ]
    }
    ServiceOffer.UpdateOffer(dataSend)
    .then((res) =>{
      if (res.status === 200){
        setMessage('Tolak Tawaran Berhasil');
        setIsLoading(false);
        setIsNotification(true);
        setTimeout(() => {
          setIsNotification(false);
          setMessage('')
          window.location.reload();
        }, 1000);
      }else{
        console.log(res.message)
        setMessage(res.message);
        setIsLoading(false);
        setIsNotification(true);
        setTimeout(() => {
          setIsNotification(false);
          setMessage('')
        }, 1000);
      }
    }).catch((err) =>{
      console.log(err.message);
      setMessage(err.message);
        setIsLoading(false);
        setIsNotification(true);
        setTimeout(() => {
          setIsNotification(false);
          setMessage('')
        }, 1000);
    })
  }

  useEffect(() => {
    setIsLoading(true);
    Promise.allSettled([
      ServiceOffer.GetOfferById(id),
      ServiceProduct.GetAllProduct(),
      ServiceProfile.GetAllUser()
    ]).then(([offers, product, user])=>{
      setOffer(offers.value.data)
      setProduct(product.value.data)
      setUser(user.value.data)
      setIsLoading(false);
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
      <ModalNotification 
        show={isNotification} 
        close={handleNotification} 
        message={message}
      />
      {isDesktopOrLaptop && (
        <InfoPenawarDesktop 
          OnSubmitAccepted={onSumbitAccept}
          OnSubmitReject={onSumbitReject}
          isAccepted={isAccepted}
          modalShow={modalShow}
          handleModalClosed={handleModalClosed}
          modalStatusShow={modalStatusShow}
          handleModalShowClosed={handleModalShowClosed}
          handleModalStatusOpen={handleModalStatusOpen}
          handleModalOpen={handleModalOpen}
          user={user}
          offer={offer}
          product={product}
        />
      )}
      {isMobile && (
        <InfoPenawarMobile 
          OnSubmitAccepted={onSumbitAccept}
          OnSubmitReject={onSumbitReject}
          isAccepted={isAccepted}
          modalShow={modalShow}
          handleModalClosed={handleModalClosed}
          modalStatusShow={modalStatusShow}
          handleModalShowClosed={handleModalShowClosed}
          handleModalStatusOpen={handleModalStatusOpen}
          handleModalOpen={handleModalOpen}
          user={user}
          offer={offer}
          product={product}
        />
      )}
    </>
  )
}

export default InfoPenawar