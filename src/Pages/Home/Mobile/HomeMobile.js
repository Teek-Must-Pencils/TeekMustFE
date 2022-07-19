import React from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../../Assets/Img/img banner 2.png'
import slide2 from '../../../Assets/Img/img banner 3.png'
import slide3 from '../../../Assets/Img/img banner.png'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions, selectSearch } from '../../../Redux/slice/searchSlice';
import { DataNotFound, CardProduct } from '../../../Components';
import './HomeMobile.css'
import "swiper/css";

const HomeMobile = (props) => {
  const { data, role, category } = props;
  const dispatch =  useDispatch();
  const search = useSelector(selectSearch);
  const handleCategories = (id) =>{
    let result;
    if (id === 1) { result = "Pencil 2B"}
    else if(id === 2){ result = "Color Pencil 8"}
    else if(id === 3){ result = "Color Pencil 12"}
    else if(id === 4){ result = "Color Pencil 24"}
    return result;
  }

  const handleSearchCategory = (value) =>{
    dispatch(searchActions.setSearch(value));
  }

  return (
    <div className='container-content'>
     <Swiper
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        grabCursor={true}
        onSlideChange={() => {}} 
        onSwiper={(swiper) => {}}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true, el:".pagination-swiper" }}
      >
        <SwiperSlide>
              <img className='hm-img'  src={slide1} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
              <img className='hm-img'  src={slide2} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
              <img className='hm-img'  src={slide3} alt="" />
        </SwiperSlide> 
        <div className='pagination-swiper'></div>
      </Swiper>
      <div className="container-sm">
      <p><b>Telusuri Kategori</b></p>
      <div className='content-filter-mobile'>
        <button 
          className={`btn-filter-mobile ${search === '' ? 'active' : ''}`}
          onClick={() => handleSearchCategory('')}
         >
            <Icon.Search className='icon-mobile'/> Semua
        </button>
        {category.length > 1 && category?.map((value)=>{
              return(
                <button 
                  key={value.id}
                  className={`btn-filter-mobile ${value.categories === search ? 'active' : ''}`}
                  onClick={() => handleSearchCategory(value.categories)}
                >
                    <Icon.Search/> 
                    <span>{handleCategories(value.id)}</span>
                </button>
              )
          }) 
         }
      </div>
      <div>
        <Row>
          {data.length < 1 && (<DataNotFound />)}
          {data.length > 1 && data.map((item, idx) => {
            return (
              <Col className='p-3' lg={3} md={3} xs={6} key={idx}>
                <CardProduct data={item}/>
              </Col>
              )
          })}
        </Row> 
      </div>   
      </div>

      {role.includes('seller') && (
         <Link to="/infoProduct">
          <button className="btn-plus">
              <Icon.Plus/> Jual
          </button>
        </Link>
        )
      }
     
    </div>
  )
}

export default HomeMobile