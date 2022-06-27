import React from 'react';
import { useMediaQuery } from 'react-responsive';
import NotifikasiDesktop from './Desktop/NotifikasiDesktop';
import NotifikasiMobile from './Mobile/NotifikasiMobile';
import { NavbarMobile } from '../../Components';


const Notifikasi = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
    const isMobile = useMediaQuery({query: '(max-width: 426px)'})
  return (
    <>
        { isDesktopOrLaptop &&  <NotifikasiDesktop/>}
        { isMobile &&   (
            <>
                <NavbarMobile isSearch={false} />
                <NotifikasiMobile/>
            </>
        )}
    </>
  )
}

export default Notifikasi