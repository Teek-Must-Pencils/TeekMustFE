import React, { useEffect, useState } from 'react';
import DaftarTawarDesktop from './Desktop/DaftarTawarDesktop';
import DaftarTawarMobile from './Mobile/DaftarTawarMobile';
import { useMediaQuery } from 'react-responsive';
import ServiceProfile from '../../Services/ServiecProfile'
import { Loading, NavbarMobile } from '../../Components';
import ServiceOffer from '../../Services/ServiceOffer';
import ServiceProduct from '../../Services/ServiceProduct';

const DaftarTawar = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [offer, setOffer] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    const username =JSON.parse(user).username;
    setIsLoading(true);
    Promise.allSettled([
      ServiceProfile.getUserByUsername(username),
      ServiceOffer.GetOffer(),
      ServiceProduct.GetAllProduct()
    ]).then(([user, offer, product]) =>{
      setUser(user.value.data);
      setOffer(offer.value.data);
      setProduct(product.value.data);
      setIsLoading(false)
    })
  
    // return () => {
    //   second
    // }
  }, [])
  
  return (
    <>
      <Loading show={isLoading} />
      {isDesktopOrLaptop && (
        <DaftarTawarDesktop 
          data={product} 
          offer={offer}
          user={user}
        />
      )}
      {isMobile && (
        <>
          <NavbarMobile isSearch={false} location="Daftar Jual Saya" />
          <DaftarTawarMobile 
            data={product}
            offer={offer} 
            user={user}
          />
        </>
      )}
    </>
  )
}

export default DaftarTawar