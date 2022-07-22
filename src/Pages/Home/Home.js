import React, { useEffect, useState } from 'react';
import HomeDesktop from './Desktop/HomeDekstop';
import HomeMobile from './Mobile/HomeMobile';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux'
import { selectRole } from '../../Redux/slice/authSlice';
import { Loading, NavbarMobile } from '../../Components';
import serviceProduct from '../../Services/ServiceProduct';
import serviceCategory from '../../Services/ServiceCategory';
import { selectSearch } from '../../Redux/slice/searchSlice';

const cate = [
  'pencil_2b', 'color_pencil_24', 'color_pencil_12', 'color_pencil_8'
]

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 426px)'});
  const isMobile = useMediaQuery({query: '(max-width: 426px)'});
  const role = useSelector(selectRole);
  const search = useSelector(selectSearch);
  
  useEffect(() => {
    setLoading(true);
    if(search === ''){
      Promise.allSettled([
        serviceProduct.GetAllProduct(), 
        serviceCategory.GetAllCategory()
      ]).then(([product, category]) => {
        setProduct(product.value.data);
        setCategory(category.value.data)
        setLoading(false)
      }).catch((err) => {
        console.log(err.message)
        setLoading(false)
      })
    }else{
      if(cate.includes(search)){
        Promise.allSettled([
          serviceProduct.SearchByCategory(search), 
          serviceCategory.GetAllCategory()
        ]).then(([product, category]) => {
          setProduct(product.value.data);
          setCategory(category.value.data)
          setLoading(false)
        }).catch((err) => {
          console.log(err.message)
          setLoading(false)
        })
      }else{
         Promise.allSettled([
          serviceProduct.SearchByName(search), 
          serviceCategory.GetAllCategory()
        ]).then(([product, category]) => {
          setProduct(product.value.data);
          setCategory(category.value.data)
          setLoading(false)
        }).catch((err) => {
          console.log(err.message)
          setLoading(false)
        })
      }
      
    }
    // return () => {
    //   second
    // }
  }, [search])

  return (
    <>
      <Loading show={isLoading} />
      {isDesktopOrLaptop && (
        <HomeDesktop 
          role={role} 
          data={product} 
          category={category}
        />
      )}
      {isMobile && (
        <>      
          <NavbarMobile />
          <HomeMobile 
            role={role} 
            data={product}
            category={category}
          />
        </>
      )}
    </>
  )
}

export default Home