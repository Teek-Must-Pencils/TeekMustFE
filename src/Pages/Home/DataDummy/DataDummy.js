import React from 'react'
import { useNavigate } from 'react-router-dom'
import dummyJam from '../../../Assets/Img/dummyProduct.png'
import { Col, Row } from 'react-bootstrap';
import './Card.css'

export const DataDummy = (props) => {
  const { filter, data } = props
  const navigate = useNavigate();

  let dataView;
  if(filter === ''){
    dataView = data
  }else{
    dataView = data.filter((value) => 
      value.categories.includes(filter?.toUpperCase())
    )
  }

  const handleProduct = (id) =>{
    return navigate(`/productPage/${id}`)
  }

  const categories = (item) =>{
    const res = (
      <div className='d-flex flex-column'>
        {item.map((item, i)=>{
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
    <div>
    <Row>
    {dataView.length < 1 && (<div className='text-center p-5'>Data Kosong</div>)}
    {dataView.length > 1 && dataView.map((item, idx) => (
        <Col className='p-3' lg={3} md={3} xs={6} key={idx}>
        <div className='card-product'>
          <div>
            <img className='card-img' src={`data:image/png;base64,${item.imgB}` || dummyJam} alt="" />
          </div>
          <div className='card-product-info'>
            <span className='card-pi-title text-truncate'>{item.name}</span>
            <span className='card-pi-category'>{categories(item.categories)}</span>
            <span className='card-pi-price'>Rp. {item.price}</span>
          </div>
          <div className='card-pi-button'>
            <button 
              className='tbl-lihat'
              onClick={handleProduct.bind(null, item.id)}
            >
              Lihat
            </button>
          </div>
        </div>
        </Col>
        ))}
    </Row>
    </div>
  )
}
