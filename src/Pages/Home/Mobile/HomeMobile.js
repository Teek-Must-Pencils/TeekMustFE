import React, { useState } from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide2 from '../../../Assets/Img/Group 9.png'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRole } from '../../../Redux/slice/authSlice';
import { DataDummy } from '../DataDummy/DataDummy'
import './HomeMobile.css'

// Import Swiper styles
import "swiper/css";

const HomeMobile = (props) => {
  const { data } = props;
  const role = useSelector(selectRole)
  const [filter, setFilter] = useState(0);

  return (
    <div>
     <Swiper
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        onSlideChange={() => {}} 
        onSwiper={(swiper) => {}}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true, el:".pagination-swiper" }}
      >
        <SwiperSlide>
              <img className='hm-img'  src={slide2} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
              <img className='hm-img'  src={slide2} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
              <img className='hm-img'  src={slide2} alt="" />
        </SwiperSlide> 
        <div className='pagination-swiper'></div>
      </Swiper>
      <div className="container-sm">
      <p><b>Telusuri Kategori</b></p>
      <div className='content-filter-mobile'>
        <button 
          className="btn-filter-mobile"
          onClick={() => setFilter(0)}
         >
            <Icon.Search className='icon-mobile'/> Semua
        </button>
        <button 
          className="btn-filter-mobile"
          onClick={() => setFilter(1)}
        >
            <Icon.Search className='icon-mobile'/> Pencil 2B
        </button>
        <button 
          className="btn-filter-mobile"
          onClick={() => setFilter(2)}
        >
            <Icon.Search className='icon-mobile'/> Pencil Warna
        </button>
        <button 
          className="btn-filter-mobile"
          onClick={() => setFilter(3)}
        >
            <Icon.Search className='icon-mobile'/> Pencil 4B
        </button>
        <button 
          className="btn-filter-mobile"
          onClick={() => setFilter(4)}
        >
            <Icon.Search className='icon-mobile'/> Pencil 5B
        </button>
        <button 
          className="btn-filter-mobile"
          onClick={() => setFilter(5)}
        >
            <Icon.Search className='icon-mobile'/> Pencil Warna
        </button>
      </div>
      <DataDummy
        // device="mobile"
        filter={filter}
        data={data}
      />
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