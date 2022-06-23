import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../../Assets/Img/Rectangle 129.png'
import slide2 from '../../../Assets/Img/img banner.png'
import slide3 from '../../../Assets/Img/Rectangle 130.png'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import './HomeDekstop.css'
import { DataDummy } from '../DataDummy/DataDummy'

// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-coverflow";

const HomeDekstop = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.4}
        onSlideChange={() => console.log('slide change')} 
        onSwiper={(swiper) => console.log(swiper)}
        centeredSlides={true}
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide> 
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide> 
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide> 
      </Swiper>
      <br></br>
      <div class="container-sm">
      <b>Telusuri Kategori</b>
      <p></p>
        <button class="btn-filter">
            <Icon.Search/> Semua
        </button>
        &ensp;&ensp;
        <button class="btn-filter">
            <Icon.Search/> Hobi
        </button>
        &ensp;&ensp;
        <button class="btn-filter">
            <Icon.Search/> Kendaraan
        </button>
        &ensp;&ensp;
        <button class="btn-filter">
            <Icon.Search/> Baju
        </button>
        &ensp;&ensp;
        <button class="btn-filter">
            <Icon.Search/> Elektronik
        </button>
        &ensp;&ensp;
        <button class="btn-filter">
            <Icon.Search/> Kesehatan
        </button>

        <p><p></p></p>
      <DataDummy/> <DataDummy/>
      </div>


      <button class="btn-plus">
            <Icon.Plus/> Jual
        </button>

    </div>
  )
}

export default HomeDekstop