import React, { useState } from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide2 from '../../../Assets/Img/img banner.png'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import './HomeDekstop.css'
import { DataDummy } from '../DataDummy/DataDummy'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

const HomeDekstop = (props) => {
  const { data , role, category } = props;
  const [filter, setFilter] = useState('');

  const handleCategories = (id) =>{
    let result;
    if (id === 1) { result = "Pencil 2B"}
    else if(id === 3){ result = "Color Pencil 12"}
    else if(id === 4){ result = "Color Pencil 24"}
    else if(id === 2){ result = "Color Pencil 8"}
    return result;
  }

  return (
    <div className=''>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => {}} 
        onSwiper={(swiper) => {}}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true, el:".pagination-swiper" }}
      >
        <SwiperSlide>
            {({ isActive }) => (
              <img className={`${isActive ? 'active-img' : 'not-active-img'}`}  src={slide2} alt="" />
            )}
        </SwiperSlide> 
        <SwiperSlide>
            {({ isActive }) => (
              <img className={`${isActive ? 'active-img' : 'not-active-img'}`}  src={slide2} alt="" />
            )}
        </SwiperSlide> 
        <SwiperSlide>
            {({ isActive }) => (
              <img className={`${isActive ? 'active-img' : 'not-active-img'}`}  src={slide2} alt="" />
            )}
        </SwiperSlide> 
        <div className='pagination-swiper'></div>
      </Swiper>
      <div className="container-sm">
      <p><b>Telusuri Kategori</b></p>
      <div className='content-filter'>
        <button 
          className="btn-filter"
          onClick={() => setFilter('')}
        >
            <Icon.Search/> <span>Semua</span>
        </button>
          {category.length > 1 && category?.map((value)=>{
              return(
                <button 
                  key={value.id}
                  className="btn-filter"
                  onClick={() => setFilter(value.categories)}
                >
                    <Icon.Search/> 
                    <span>{handleCategories(value.id)}</span>
                </button>
              )
            })
          }
      </div>

      <DataDummy 
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

export default HomeDekstop