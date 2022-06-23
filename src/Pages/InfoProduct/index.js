import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import usePreview from '../../Hooks/usePreview'
import serviceProduct from '../../Services/ServiceProduct';
import { selectUser } from '../../Redux/slice/authSlice'
import { Loading } from '../../Components'
import InfoProductDesktop from './Dekstop/InfoProductDesktop';
import InfoProductMobile from './Mobile/InfoProductMobile';

const InfoProduct = () => {
    let navigate = useNavigate();
    const preview = usePreview();
    const user = useSelector(selectUser);
    const [isLoading, setIsLoading] = useState(false)
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
    const isMobile = useMediaQuery({query: '(max-width: 426px)'});
    
    console.log('user', user)
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
          image: value.image,
          seller: "SellerTiga",
          city: "New York"
        }
        serviceProduct.AddNewData(data).then(
          (res) => {
            setIsLoading(false)
            console.log("res", res)
          }
        )
        // console.log("desktopValueInput", value);
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

    // console.log('preview', preview.image)
  return (
    <>
      <Loading show={isLoading} close={() => (setIsLoading(true))} />} 
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