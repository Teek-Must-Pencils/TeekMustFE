import React, { useEffect, useState } from 'react';
import DaftarJualDesktop from './Desktop/DaftarJualDesktop';
import DaftarJualMobile from './Mobile/DaftarJualMobile';
import { useMediaQuery } from 'react-responsive';
import { Loading, NavbarMobile } from '../../Components';
import ServiceProfile from '../../Services/ServiecProfile';
import ServiceProduct from '../../Services/ServiceProduct';
import ServiceOffer from '../../Services/ServiceOffer';

const Home = () => {
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
          <DaftarJualDesktop 
            data={product} 
            user={user}
            offer={offer}
          />
      )}
      {isMobile && (<>
        <NavbarMobile isSearch={false} location="Daftar Jual Saya" />
        <DaftarJualMobile 
          data={product} 
          user={user}
          offer={offer}
        />
      </>)}
    </>
  )
}

export default Home