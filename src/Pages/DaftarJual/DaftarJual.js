import React from 'react';
import DaftarJualDesktop from './Desktop/DaftarJualDesktop';
import DaftarJualMobile from './Mobile/DaftarJualMobile';
import { useMediaQuery } from 'react-responsive';

const data = [
  {name:"dummy1", categories:["Pencil 2B"], price:2001},
  {name:"dummy2", categories:["Pencil 2B"], price:2002},
  {name:"dummy3", categories:["Pencil 2B"], price:2003},
  {name:"dummy4", categories:["Pencil 2B"], price:2004},
  {name:"dummy5", categories:["Pencil 2B"], price:2005},
]

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});

  return (
    <>
      {isDesktopOrLaptop && (<DaftarJualDesktop data={data} />)}
      {isMobile && (<DaftarJualMobile data={data} />)}
    </>
  )
}

export default Home