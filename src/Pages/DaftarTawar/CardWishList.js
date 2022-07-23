import React from 'react';
import { useNavigate } from 'react-router-dom';
import dummyJam from '../../Assets/Img/dummyProduct.png';
import './CardWishList.css'
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';
import ServiceWishlist from '../../Services/ServiceWishlist';

const CardProduct = (props) => {
    const { data, handleNotification, handleMessage } = props;
    let navigate = useNavigate();
    const role = useSelector(state=>state.auth.role);

    const handleProduct = (id) =>{
        return navigate(`/productPage/${id}`)
      }
    const handleCategory = (item) =>{
        let result;
        if (item.toLowerCase() === 'pencil_2b') { result = "Pencil 2B"}
        else if(item.toLowerCase() === 'color_pencil_12'){ result = "Color Pencil 12"}
        else if(item.toLowerCase() === 'color_pencil_24'){ result = "Color Pencil 24"}
        else if(item.toLowerCase() === 'color_pencil_8'){ result = "Color Pencil 8"}
        return result;
    }
    
    const handleWishlist = (value) => {
      ServiceWishlist.DeleteWishlistLocal(value)
      .then((res) => {
        handleMessage(res);
        handleNotification();
        setTimeout(() => {
          handleMessage('')
          handleNotification()
        }, 1000);
      })
    }
    
      const categories = (item) =>{
        const res = (
          <div className='cardProduct-pi-box'>
            {item.map((item, i)=>{
                  return(
                    <div key={i}
                      className="cardProduct-pi-box-category"
                    >
                      {handleCategory(item)}
                    </div>
                  )
                })
              }
          </div>
        )
        return res
      }

  return (
    <>
        <div className='cardProduct-product'>
          <div>
            <img className='cardProduct-img' 
              src={data.img ? `data:image/png;base64,${data.img}` : dummyJam} alt="" 
            />
          </div>
          <div className='cardProduct-product-info'>
            <span className='cardProduct-pi-title text-truncate'>{data.name || "-"}</span>
            <span className='cardProduct-pi-category'>{categories(data.categories) || "-"}</span>
            <span className='cardProduct-pi-price'>Rp. {data.price || "-"}</span>
          </div>
          
          <div className='cardProduct-pi-button'>
          {role.includes('buyer') &&
            <button 
              className='w-25 tbl-wishlist-dm'
              onClick={handleWishlist.bind(null, data.id)}
            >
              <Icon.ShoppingCart />
              {/* <Icon.Heart className='icon-wishlist' /> */}
            </button>
          }
          
            <button 
              className='w-75 tbl-lihat'
              onClick={handleProduct.bind(null, data.id)}
            >
              Lihat
            </button>
          </div>
        </div>
    </>
  )
}

export default CardProduct