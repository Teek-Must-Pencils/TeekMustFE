import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import InfoPenawarDesktop from './Desktop/InfoPenawarDesktop';
import InfoPenawarMobile from './Mobile/InfoPenawarMobile';
import ServiceOffer from '../../Services/ServiceOffer';
import { Loading } from '../../Components';




const InfoPenawar = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 426px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });
  const [isLoading, setIsLoading] = useState();
  const [isAccepted, setIsAccepted] = React.useState(true)
  const [modalShow, setModalShow] = React.useState(false);
  const [modalStatusShow, setModalStatusShow] = React.useState(false);

  
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
      id: 0,
      // productId: 0,
      // priceNegotiated: 0,
      // createdAt: "2022-07-20T05:52:01.767Z",
      status: [
        "ACCEPT"
      ]
    }
  
    // ServiceOffer.AcceptOffer(dataSend)
    // .then((res) =>{
    //   if (res.data === 200){
    //     setIsLoading(false);
    //   }else{
    //     console.log(res.message)
    //     setIsLoading(false)
    //   }
    // }).catch((err) =>{
    //   console.log(err.message);
    //   setIsLoading(false)
    // })
      setTimeout(() => {
        handleModalOpen();
        setIsLoading(false);
      }, 1000);
  }

  const onSumbitReject= () =>{
    setIsLoading(true);
    const dataSend ={
      id: 0,
      // productId: 0,
      // priceNegotiated: 0,
      // createdAt: "2022-07-20T05:52:01.767Z",
      status: [
        "REJECT"
      ]
    }
    // ServiceOffer.RejectOffer(dataSend)
    // .then((res) =>{
    //   if (res.data === 200){
    //     setIsLoading(false);
    //   }else{
    //     console.log(res.message)
    //     setIsLoading(false)
    //   }
    // }).catch((err) =>{
    //   console.log(err.message);
    //   setIsLoading(false)
    // })
    setTimeout(() => {
      handleModalOpen();
      setIsLoading(false);
    }, 1000);
  }

  return (
    <>
      <Loading show={isLoading} />
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
        />
      )}
    </>
  )
}

export default InfoPenawar