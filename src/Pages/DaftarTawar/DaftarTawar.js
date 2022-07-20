import React, { useEffect, useState } from 'react';
import DaftarTawarDesktop from './Desktop/DaftarTawarDesktop';
import DaftarTawarMobile from './Mobile/DaftarTawarMobile';
import { useMediaQuery } from 'react-responsive';
import ServiceProfile from '../../Services/ServiecProfile'
import { Loading, NavbarMobile } from '../../Components';
import ServiceOffer from '../../Services/ServiceOffer';

const data = [
  {name:"dummy1", categories:["Pencil_2B"], price:2001,  wishlist: true, sell:false},
  {name:"dummy2", categories:["Pencil_2B"], price:2002,  wishlist: false, sell:false},
  {name:"dummy3", categories:["Pencil_2B"], price:2003, wishlist: false, sell:false},
  {name:"dummy4", categories:["COLOR_PENCIL_8"], price:2004, wishlist: true, sell:false},
  {name:"dummy5", categories:["COLOR_PENCIL_12"], price:2005,  wishlist: true, sell:false},
]

const DaftarTawar = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    const username =JSON.parse(user).username;
    setIsLoading(true);
    Promise.allSettled([
      ServiceProfile.getUserByUsername(username),
      ServiceOffer.GetOffer()
    ]).then(([user, offer]) =>{
      setUser(user.value.data);
      setOffer(offer.value.data);
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
          data={data} 
          offer={offer}
          user={user}
        />
      )}
      {isMobile && (
        <>
          <NavbarMobile isSearch={false} location="Daftar Jual Saya" />
          <DaftarTawarMobile 
            data={data}
            offer={offer} 
            user={user}
          />
        </>
      )}
    </>
  )
}

export default DaftarTawar