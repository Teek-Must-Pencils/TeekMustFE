import React from 'react'
import dummyJam from '../../../Assets/Img/dummyProduct.png'
import { Col, Row } from 'react-bootstrap';
import './Card.css'

const dataDummy = [
  {id: 1,img: dummyJam,productName: "Jam Tangan Casio1",category: "Pencils 2B",price: 200000},
  {id: 2,img: dummyJam,productName: "Jam Tangan Casio2",category: "Pencils 2B",price: 200000},
  {id: 3,img: dummyJam,productName: "Jam Tangan Casio3",category: "Pencils 2B",price: 200000},
  {id: 4,img: dummyJam,productName: "Jam Tangan Casio4",category: "Pencils 3B",price: 200000},
  {id: 5,img: dummyJam,productName: "Jam Tangan Casio5",category: "Pencils 3B",price: 200000},
  {id: 6,img: dummyJam,productName: "Jam Tangan Casio6",category: "Pencils 3B",price: 200000},
  {id: 7,img: dummyJam,productName: "Jam Tangan Casio7",category: "Pencils 4B",price: 200000},
  {id: 8,img: dummyJam,productName: "Jam Tangan Casio8",category: "Pencils 4B",price: 200000},
  {id: 9,img: dummyJam,productName: "Jam Tangan Casio9",category: "Pencils 4B",price: 200000},
  {id: 10,img: dummyJam,productName: "Jam Tangan Casio10",category: "Pencils 5B",price: 200000},
  {id: 11,img: dummyJam,productName: "Jam Tangan Casio11",category: "Pencils 5B",price: 200000},
  {id: 12, img: dummyJam,productName: "Jam Tangan Casio",category: "Pencils 5B",price: 200000},
]

export const DataDummy = (props) => {
  const { filter } = props
  let data, search;
  if(filter === 0){
    data = dataDummy
  }else{
    if(filter === 1) { search = "Pencils 2B"}
    if(filter === 2) { search = "Pencils 3B"}
    if(filter === 3) { search = "Pencils 4B"}
    if(filter === 4) { search = "Pencils 5B"}
    if(filter === 5) { search = "Pencils Warna"}
    data = dataDummy.filter((value) => value.category === search)
  }
  return (
    <div>
    <Row>
    {data.length < 1 && <p>Data Kosong</p>}
    {data.length > 1 && data.map((item, idx) => (
        <Col className='p-3' lg={2} md={2} xs={6} key={idx}>
        <div className='card-product'>
          <div>
            <img className='card-img' src={dummyJam} alt="" />
          </div>
          <div className='card-product-info'>
            <span className='card-pi-title'>{item.productName}</span>
            <span className='card-pi-category'>{item.category}</span>
            <span className='card-pi-price'>Rp. {item.price}</span>
          </div>
        </div>
        </Col>
        ))}
    </Row>
    </div>
  )
}
