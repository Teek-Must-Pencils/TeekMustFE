import React from 'react';
import { useNavigate } from 'react-router-dom';
import dummyJam from '../../Assets/Img/dummyProduct.png';
import './CardProduct.css'

const CardProduct = (props) => {
    const { data } = props;
    let navigate = useNavigate();

    const handleProduct = (id) =>{
        return navigate(`/productPage/${id}`)
      }
    
      const categories = (value) =>{
        const res = (
          <div className='d-flex flex-column'>
            {value.map((item, i)=>{
                  return(
                    <div key={i}>{item}</div>
                  )
                })
              }
          </div>
        )
        return res
      } 

  return (
    <>
        <div className='card-product'>
          <div>
            {/* <img className='card-img' src={`data:image/png;base64,${data.imgB}` || dummyJam} alt="" /> */}
            <img className='card-img' src={ dummyJam} alt="" />
          </div>
          <div className='card-product-info'>
            <span className='card-pi-title text-truncate'>{data.name}</span>
            <span className='card-pi-category'>{categories(data.categories)}</span>
            <span className='card-pi-price'>Rp. {data.price}</span>
          </div>
          <div className='card-pi-button'>
            <button 
              className='tbl-lihat'
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