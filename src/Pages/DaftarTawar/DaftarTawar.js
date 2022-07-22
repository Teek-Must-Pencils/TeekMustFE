import React, { useEffect, useState } from 'react';
import DaftarTawarDesktop from './Desktop/DaftarTawarDesktop';
import DaftarTawarMobile from './Mobile/DaftarTawarMobile';
import { useMediaQuery } from 'react-responsive';
import ServiceProfile from '../../Services/ServiecProfile'
import { Loading, NavbarMobile } from '../../Components';
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

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    const username =JSON.parse(user).username;
    setIsLoading(true);
    Promise.allSettled([
      ServiceProfile.getUserByUsername(username),
      ServiceOffer.GetOffer(),
      ServiceProduct.GetAllProduct(),
      ServiceWishlist.GetWishlist()
    ]).then(([user, offer, product, wishlist]) =>{
      setUser(user.value.data);
      setOffer(offer.value.data);
      setProduct(product.value.data);
      setWishlist(wishlist.value.data);
      setIsLoading(false)
    })
  
    // return () => {
    //   second
    // }
  }, [])
  
  // console.log('user',user)
  // console.log('offer',offer)
  // console.log('product',product)
  // console.log('wishlist',wishlist)
  return (
    <>
      <Loading show={isLoading} />
      {isDesktopOrLaptop && (
        <DaftarTawarDesktop 
          data={product} 
          offer={offer}
          user={user}
          wishlist={wishlist}
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
          />
        </>
      )}
    </>
  )
}

export default DaftarTawar