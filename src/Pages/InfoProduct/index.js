import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useParams } from 'react-router-dom';
import usePreview from '../../Hooks/usePreview'
import serviceProduct from '../../Services/ServiceProduct';
import { Loading, ModalNotification } from '../../Components'
import InfoProductDesktop from './Dekstop/InfoProductDesktop';
import InfoProductMobile from './Mobile/InfoProductMobile';
import ServiceCategory from '../../Services/ServiceCategory';
import ServiceProfile from '../../Services/ServiecProfile';

const InfoProduct = () => {
     const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
    const isMobile = useMediaQuery({query: '(max-width: 426px)'});
    let navigate = useNavigate();
    const { id } = useParams(); 
    const preview = usePreview();
    const [isLoading, setIsLoading] = useState(false)
    const [isNotification, setIsNotification] = useState(false)
    const [message, setMessage] = useState(false);
    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState();
    const [user, setUser] = useState([]);
   

    // Desktop
    //add
    const onSubmitSellerInput = (value) =>{
      if(value.button === 'submit'){  
        setIsLoading(true);
        serviceProduct.AddNewData(value).then(
          (res) => {
            // console.log('res', res)
            if(res.status === 201){
              setMessage(res.data)
              setIsLoading(false)
              setIsNotification(true)
              setTimeout(() => {
                setIsNotification(false);
                setMessage('')  
                navigate('/')
              }, 1000);
            
            }else{
              setMessage("Gagal Input")
              setIsLoading(false)
              setIsNotification(true)
              setTimeout(() => {
                setIsNotification(false);
                setMessage('')
              }, 1000);
          }
            // console.log("res", res)
          }
        )
      }else{
        preview.setPreview(value);
        return navigate('/productPage')
      }
    }
     //edit
    const onSubmitSellerEdit = (value) =>{
      if(value.button === 'submit'){  
        console.log('edit', value)
        // setIsLoading(true);
        // serviceProduct.AddNewData(value).then(
        //   (res) => {
        //     if(res.status === 201){
        //       setMessage(res.data)
        //       setIsLoading(false)
        //       setIsNotification(true)
        //       setTimeout(() => {
        //         setIsNotification(false);
        //         setMessage('')
        //         navigate('/')
        //       }, 1000);
            
        //     }else{
        //       setMessage("Gagal Input")
        //       setIsLoading(false)
        //       setIsNotification(true)
        //       setTimeout(() => {
        //         setIsNotification(false);
        //         setMessage('')
        //       }, 1000);
        //   }
        //     // console.log("res", res)
        //   }
        // )
      }else{}
    }

    // Mobile
    const onSubmitMobileInput = (value) =>{
      if(value.button === 'submit'){  
        setIsLoading(true);
        serviceProduct.AddNewData(value).then(
          (res) => {
            // console.log('res', res)
            if(res.status === 201){
              setMessage(res.data)
              setIsLoading(false)
              setIsNotification(true)
              setTimeout(() => {
                setIsNotification(false);
                setMessage('')  
                navigate('/')
              }, 1000);
            
            }else{
              setMessage('Gagal Input')
              setIsLoading(false)
              setIsNotification(true)
              setTimeout(() => {
                setIsNotification(false);
                setMessage('')
              }, 1000);
          }
            // console.log("res", res)
          }
        )
      }else{
        preview.setPreview(value);
        return navigate('/productPage')
      }
    }
    const onSubmitMobileEdit = (value) =>{
      if(value.button === 'submit'){ 
        console.log('edit', value) 
        // setIsLoading(true);
        // serviceProduct.AddNewData(value).then(
        //   (res) => {
        //     if(res.status === 201){
        //       setMessage(res.data)
        //       setIsLoading(false)
        //       setIsNotification(true)
        //       setTimeout(() => {
        //         setIsNotification(false);
        //         setMessage('')
        //         navigate('/')
        //       }, 1000);
            
        //     }else{
        //       setMessage("Gagal Input")
        //       setIsLoading(false)
        //       setIsNotification(true)
        //       setTimeout(() => {
        //         setIsNotification(false);
        //         setMessage('')
        //       }, 1000);
        //   }
        //     // console.log("res", res)
        //   }
        // )
      }else{}
    }


  const handleIsNotification = () => {
    setIsNotification(false);
  }

    useEffect(() => {
      const user = sessionStorage.getItem('user');
      const username =JSON.parse(user).username;
      setIsLoading(true);
      if(id){ 
        Promise.allSettled([
          ServiceCategory.GetAllCategory(),
          serviceProduct.GetProductById(id),
          ServiceProfile.getUserByUsername(username)
        ]).then(([category, product, user]) => {
          setCategory(category.value.data);
          setProduct(product.value.data);
          setUser(user.value.data);
          setIsLoading(false);
        })
      }else{
        Promise.allSettled([
          ServiceCategory.GetAllCategory(),
          ServiceProfile.getUserByUsername(username)
        ]).then(([category, user]) => {
          setCategory(category.value.data);
          setUser(user.value.data);
          setIsLoading(false);
        })
      }
      
      // return () => {
      //   second
      // }
    }, [id])
    
    // console.log(id)

  return (
    <>
     <ModalNotification show={isNotification} close={handleIsNotification} message={message}/>
      <Loading show={isLoading} close={() => (setIsLoading(true))} />
      { isDesktopOrLaptop &&  (
        <InfoProductDesktop 
          onSubmitSellerInput={onSubmitSellerInput}
          onSubmitSellerEdit={onSubmitSellerEdit}
          category={category}
          product={product}
          user={user}
          id={id}
        />
      )}
      { isMobile && (
          <InfoProductMobile
            onSubmitMobileInput={onSubmitMobileInput}
            onSubmitSellerEdit={onSubmitMobileEdit}
            category={category}
            product={product}
            user={user}
            id={id}
          />
      )}
    </>
  )
}

export default InfoProduct