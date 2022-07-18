import React from 'react';
import DaftarTawarDesktop from './Desktop/DaftarTawarDesktop';
import DaftarTawarMobile from './Mobile/DaftarTawarMobile';
import { useMediaQuery } from 'react-responsive';

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

  return (
    <>
      {isDesktopOrLaptop && (<DaftarTawarDesktop data={data} />)}
      {isMobile && (<DaftarTawarMobile data={data} />)}
    </>
  )
}

export default DaftarTawar