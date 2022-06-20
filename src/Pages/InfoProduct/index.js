import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import usePreview from '../../Hooks/usePreview'
import InfoProductDesktop from './Dekstop/InfoProductDesktop';
import InfoProductMobile from './Mobile/InfoProductMobile';

const InfoProduct = () => {
    let navigate = useNavigate();
    const preview = usePreview();
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
    const isMobile = useMediaQuery({query: '(max-width: 426px)'});
    
    // Desktop
    const onSubmitSellerInput = (value) =>{
      if(value.button === 'submit'){  
        console.log("desktopValueInput", value);
      }else{
        const data ={
          name: value.nama,
          price: value.harga,
          category: value.kategori,
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
          image: value.image
        }
        preview.setPreview(data);
        return navigate('/productPage')
      }
    }

    // console.log('preview', preview.image)
  return (
    <>
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