import React, { useState } from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide2 from '../../../Assets/Img/Group 9.png'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { DataDummy } from '../DataDummy/DataDummy'
import './HomeMobile.css'

// Import Swiper styles
import "swiper/css";

const HomeMobile = (props) => {
  const { data, role, category } = props;
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
          onClick={() => setFilter('')}
         >
            <Icon.Search className='icon-mobile'/> Semua
        </button>
        {category.length > 1 && category?.map((value)=>{
              return(
                <button 
                  key={value.id}
                  className="btn-filter-mobile"
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