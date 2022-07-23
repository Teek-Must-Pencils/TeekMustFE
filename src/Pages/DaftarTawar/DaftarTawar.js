import React, { useEffect, useState } from 'react';
import DaftarTawarDesktop from './Desktop/DaftarTawarDesktop';
import DaftarTawarMobile from './Mobile/DaftarTawarMobile';
import { useMediaQuery } from 'react-responsive';
import ServiceProfile from '../../Services/ServiecProfile'
import { Loading, ModalNotification, NavbarMobile } from '../../Components';
import ServiceOffer from '../../Services/ServiceOffer';
import ServiceProduct from '../../Services/ServiceProduct';
import ServiceWishlist from '../../Services/ServiceWishlist';

const DaftarTawar = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [offer, setOffer] = useState([]);
  const [product, setProduct] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistLocal, setWishlistLocal] = useState([]);
  const [isNotification, setIsNotification] = useState(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    const username =JSON.parse(user).username;
    setIsLoading(true);
    Promise.allSettled([
      ServiceProfile.getUserByUsername(username),
      ServiceOffer.GetOffer(),
      ServiceProduct.GetAllProduct(),
      ServiceWishlist.GetWishlist(),
      ServiceWishlist.GetWishlistLocal()
    ]).then(([user, offer, product, wishlist, wishlistLocal]) =>{
      setUser(user.value.data);
      setOffer(offer.value.data);
      setProduct(product.value.data);
      setWishlist(wishlist.value.data);
      setWishlistLocal(wishlistLocal.value)
      setIsLoading(false)
    })
  
    // return () => {
    //   second
    // }
  }, [])

  const handleNotification = () =>{
    setIsNotification((prev) => !prev)
  }
  const handleMessage = (value) =>{
    setMessage(value)
  }

  
  return (
    <>
      <Loading show={isLoading} />
      <ModalNotification show={isNotification} message={message} />
      {isDesktopOrLaptop && (
        <DaftarTawarDesktop 
          data={product} 
          offer={offer}
          user={user}
          wishlist={wishlist}
          wishlistLocal={wishlistLocal}
          handleNotification={handleNotification}
          handleMessage={handleMessage}
        />
      )}
      {isMobile && (
        <>
          <NavbarMobile isSearch={false} location="Daftar Jual Saya" />
          <DaftarTawarMobile 
            data={product}
            offer={offer} 
            user={user}
            wishlist={wishlist}
            wishlistLocal={wishlistLocal}
            handleNotification={handleNotification}
            handleMessage={handleMessage}
          />
        </>
      )}
    </>
  )
}

export default DaftarTawar