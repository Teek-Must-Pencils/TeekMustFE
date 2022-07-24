import React, { useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import NotifikasiDesktop from './Desktop/NotifikasiDesktop';
import NotifikasiMobile from './Mobile/NotifikasiMobile';
import { Loading, NavbarMobile } from '../../Components';
import ServiceNotification from '../../Services/ServiceNotification';
import { useSelector } from 'react-redux';
import { selectRole } from '../../Redux/slice/authSlice';


const Notifikasi = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'})
    const isMobile = useMediaQuery({query: '(max-width: 426px)'})
    const [notification, setNotification] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const user = sessionStorage.getItem('user');
      const role =JSON.parse(user).roles;
      
      if(role.includes('seller')){
        setIsLoading(true);
        ServiceNotification.getNotificationSeller().then((res)=>{
          if (res.data === 200) {
            setNotification(res.data);
            setIsLoading(false);
          } else {
            console.log(res);
            setIsLoading(false);
          }
        })
      }else{
        setIsLoading(true);
        ServiceNotification.getNotificationBuyer().then((res)=>{
          if (res.data === 200) {
            setNotification(res.data);
            setIsLoading(false);
          } else {
            console.log(res);
            setIsLoading(false);
          }
        })
      }
    
      // return () => {
      //   second
      // }
    }, [])

    
  return (
    <>
      <Loading show={isLoading}/>
        { isDesktopOrLaptop &&  
          <NotifikasiDesktop 
            data={notification} 
          />}
        { isMobile &&   (
            <>
                <NavbarMobile isSearch={false} location="Notifikasi" />
                <NotifikasiMobile
                  data={notification}
                />
            </>
        )}
    </>
  )
}

export default Notifikasi