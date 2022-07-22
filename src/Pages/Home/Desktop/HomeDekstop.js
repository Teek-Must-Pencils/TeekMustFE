import React from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../../Assets/Img/img banner 2.png'
import slide2 from '../../../Assets/Img/img banner 3.png'
import slide3 from '../../../Assets/Img/img banner.png'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { CardProduct, DataNotFound } from '../../../Components';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions, selectSearch } from '../../../Redux/slice/searchSlice';
import './HomeDekstop.css'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

const HomeDekstop = (props) => {
  const search = useSelector(selectSearch)
  const { data , role, category } = props;
  const dispatch =  useDispatch();

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
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        onSlideChange={() => {}} 
        onSwiper={(swiper) => {}}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true, el:".pagination-swiper" }}
      >
        <SwiperSlide>
            {({ isActive }) => (
              <img className={`${isActive ? 'active-img' : 'not-active-img'}`}  src={slide1} alt="" />
            )}
        </SwiperSlide> 
        <SwiperSlide>
            {({ isActive }) => (
              <img className={`${isActive ? 'active-img' : 'not-active-img'}`}  src={slide2} alt="" />
            )}
        </SwiperSlide> 
        <SwiperSlide>
            {({ isActive }) => (
              <img className={`${isActive ? 'active-img' : 'not-active-img'}`}  src={slide3} alt="" />
            )}
        </SwiperSlide> 
        <div className='pagination-swiper'></div>
      </Swiper>
      <div className="container-sm">
      <h5><b>Telusuri Kategori</b></h5>
      <div className='content-filter'>
        <button 
          className={`btn-filter ${search === '' ? 'active-home' : ''}`}
          onClick={() => handleSearchCategory('')}
        >
            <Icon.Search/> <span>Semua</span>
        </button>
          {category.length > 1 && category?.map((value)=>{
            if(search){}
              return(
                <button 
                  key={value.id}
                  className={`btn-filter ${value.categories === search ? 'active-home' : ''}`}
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
        {data.length >= 1 && data.map((item, idx) => {
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

export default HomeDekstop