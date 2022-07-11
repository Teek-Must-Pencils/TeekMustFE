import React from 'react';
import DaftarJualDesktop from './Desktop/DaftarJualDesktop';
import DaftarJualMobile from './Mobile/DaftarJualMobile';
import { useMediaQuery } from 'react-responsive';
import { NavbarMobile } from '../../Components';

const data = [
  {name:"dummy1", categories:["Pencil 2B"], price:2001,  wishlist: true, sell:false},
  {name:"dummy2", categories:["Pencil 2B"], price:2002,  wishlist: false, sell:false},
  {name:"dummy3", categories:["Pencil 2B"], price:2003, wishlist: false, sell:false},
  {name:"dummy4", categories:["Pencil 2B"], price:2004, wishlist: true, sell:false},
  {name:"dummy5", categories:["Pencil 2B"], price:2005,  wishlist: true, sell:false},
]

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});

  return (
    <>
      {isDesktopOrLaptop && (<DaftarJualDesktop data={data} />)}
      {isMobile && (<>
        <NavbarMobile isSearch={false} location="Daftar Jual Saya" />
        <DaftarJualMobile data={data} />
      </>)}
    </>
  )
}

export default Home