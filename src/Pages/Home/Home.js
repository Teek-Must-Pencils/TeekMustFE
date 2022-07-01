import React, { useEffect, useState } from 'react';
import HomeDesktop from './Desktop/HomeDekstop';
import HomeMobile from './Mobile/HomeMobile';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux'
import { selectRole } from '../../Redux/slice/authSlice';
import { Loading, NavbarMobile } from '../../Components';
import serviceProduct from '../../Services/ServiceProduct';

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});
  const role = useSelector(selectRole);
  
  useEffect(() => {
    setLoading(true);
    serviceProduct.GetAllProduct()
    .then((res) =>{
      // console.log(res)
      if(res.status === 200){
        setData(res.data);
        setLoading(false)
      }else{
        setLoading(false)
      }
    })
  
    // return () => {
    //   second
    // }
  }, [])
  
//   const handleIsLoading = () =>{
//     setLoading((prev) => !prev)
//   }

  return (
    <>
      <Loading show={isLoading} />
      {isDesktopOrLaptop && (<HomeDesktop role={role} data={data} />)}
      {isMobile && (
        <>      
          <NavbarMobile />
          <HomeMobile role={role} data={data} />
        </>
      )}
    </>
  )
}

export default Home