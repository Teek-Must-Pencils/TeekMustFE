import React from 'react'
import { useNavigate } from 'react-router-dom'
import dummyJam from '../../../Assets/Img/dummyProduct.png'
import { Col, Row } from 'react-bootstrap';
import './Card.css'
// import {encode, decode} from 'node-base64-image';


// var base64Img = require('base64-img');

export const DataDummy = (props) => {
  const { filter, data } = props
  const navigate = useNavigate();

  let dataView, search;
  if(filter === 0){
    dataView = data
  }else{
    if(filter === 1) { search = "PENCIL_2B"}
    if(filter === 2) { search = "COLOR_PENCIL_8"}
    if(filter === 3) { search = "Pencils 4B"}
    if(filter === 4) { search = "Pencils 5B"}
    if(filter === 5) { search = "Pencils Warna"}
    dataView = data.filter((value) => value.categories.includes(search))
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
  
  // const convertIMG = async(data) => {
  //   // const url = 'https://example.com/test.jpg';
  //   const options = {
  //     string: true,
  //     headers: {
  //       "User-Agent": "my-app"
  //     }
  //   };
  //   const image = await decode(data, options);
  //   console.log(image)
  //   // return 
  // }

  return (
    <div>
    <Row>
    {dataView.length < 1 && (<div className='text-center p-5'>Data Kosong</div>)}
    {dataView.length > 1 && dataView.map((item, idx) => (
        <Col className='p-3' lg={2} md={2} xs={6} key={idx}>
        <div className='card-product'>
          <div>
            {/* <img className='card-img' src={item.imgB || dummyJam} alt="" /> */}
            <img className='card-img' src={`data:image/png;base64,${item.imgB}`} alt="" />
          </div>
          <div className='card-product-info'>
            <span className='card-pi-title text-truncate'>{item.name}</span>
            <span className='card-pi-category'>{categories(item.categories)}</span>
            <span className='card-pi-price'>Rp. {item.price}</span>
          </div>
          <div className='card-pi-button'>
            <button 
              className='btn-outline-primary rounded-pill px-4'
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
