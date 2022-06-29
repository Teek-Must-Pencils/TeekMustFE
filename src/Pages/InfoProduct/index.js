import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import usePreview from '../../Hooks/usePreview'
import serviceProduct from '../../Services/ServiceProduct';
import { selectEmail, selectUser } from '../../Redux/slice/authSlice'
import { Loading, ModalNotification } from '../../Components'
import InfoProductDesktop from './Dekstop/InfoProductDesktop';
import InfoProductMobile from './Mobile/InfoProductMobile';

const InfoProduct = () => {
    let navigate = useNavigate();
    const preview = usePreview();
    const user = useSelector(selectUser);
    const email = useSelector(selectEmail);
    const [isLoading, setIsLoading] = useState(false)
    const [isNotification, setIsNotification] = useState(false)
    const [message, setMessage] = useState(false);
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
    const isMobile = useMediaQuery({query: '(max-width: 426px)'});
    
    // console.log('user', user)
    // Desktop
    const onSubmitSellerInput = (value) =>{
      if(value.button === 'submit'){  
        setIsLoading(true);
        const data ={
          name: value.nama,
          price: value.harga,
          category: [value.kategori],
          description: value.deskripsi,
          imageFile: value.imageFile,
          // image: value.image,
          seller: user,
          city: email
        }
        serviceProduct.AddNewData(data).then(
          (res) => {
            console.log('res', res)
            // if(res.status === 201){
              setMessage("tets")
              setIsLoading(false)
              setIsNotification(true)
              setTimeout(() => {
                setIsNotification(false);
                setMessage('')
              }, 1000);
            // }else{
              // setMessage("tets")
              // setIsLoading(false)
              // setIsNotification(true)
              // setTimeout(() => {
              //   setIsNotification(false);
              //   setMessage('')
              // }, 1000);
          // }
            console.log("res", res)
          }
        )
        console.log("desktopValueInput", data);
      }else{
        const data ={
          name: value.nama,
          price: value.harga,
          category: [value.kategori],
          description: value.deskripsi,
          imageFile: value.imageFile,
          image: value.image
        }
        preview.setPreview(data);
        return navigate('/productPage')
      }
    }

    // Mobile
    const onSubmitMobileInput = (value) =>{
      if(value.button === 'submit'){  
        console.log("MobileValueInput", value);
      }else{
        const data ={
          name: value.nama,
          price: value.harga,
          category: value.kategori,
          description: value.deskripsi,
          imageFile: value.imageFile,
          image: value.image,
        }
        preview.setPreview(data);
        return navigate('/productPage')
      }
    }

  const handleIsNotification = () => {
    setIsNotification(false);
  }
    // console.log('preview', preview.image)
  return (
    <>
     <ModalNotification show={isNotification} close={handleIsNotification} message={message}/>
      <Loading show={isLoading} close={() => (setIsLoading(true))} />
      { isDesktopOrLaptop &&  (
        <InfoProductDesktop 
          onSubmitSellerInput={onSubmitSellerInput}
        />
      )}
      { isMobile && (
          <InfoProductMobile
            onSubmitMobileInput={onSubmitMobileInput}
          />
      )}
    </>
  )
}

export default InfoProduct