import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import NotifikasiDesktop from './Desktop/NotifikasiDesktop';
import NotifikasiMobile from './Mobile/NotifikasiMobile';
import { NavbarMobile } from '../../Components';
// import { Loading } from '../../Components';
import serviceNotification from '../../Services/ServiceNotification';


const Notifikasi = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 426px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' })
  const [dataUser, setDataUser] = useState();

  useEffect(() => {
    // console.log('notif)


    serviceNotification.GetAllNotification()
    .then((res) => {
        console.log(res)
        if (res.status === 200) {
          console.log('notif',res)
          // setDataUser(res.data)

        }else{
          console.log(res)

        }
      }
    )
  }, [])

  return (
    <>
      {isDesktopOrLaptop && <NotifikasiDesktop/>}
      {isMobile && (
        <>
          {/* <Loading show={isLoading}  /> */}
          <NavbarMobile isSearch={false} location="Notifikasi" />
          <NotifikasiMobile />
        </>
      )}
    </>
  )
}

export default Notifikasi