import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../../Assets/Img/Rectangle 129.png'
import slide2 from '../../../Assets/Img/Group 9.png'
import slide3 from '../../../Assets/Img/Rectangle 130.png'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { DataDummy } from '../DataDummy/DataDummy'
import './HomeMobile.css'

// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-coverflow";

const HomeMobile = () => {
  return (
    <div>

      <img src={slide2} alt="" className="slide2" />
      <br></br>
      <div class="container-sm">
      <font size="3"><b>Telusuri Kategori</b></font>
      <p></p>
        <button class="btn-filter">
        <b className="text-filter"><Icon.Search/> <span >Semua</span></b>
        </button>
        &ensp;&ensp;
        <button class="btn-filter">
            <Icon.Search/> <span>Hobi</span>
        </button>
        &ensp;&ensp;
        <button class="btn-filter">
            <Icon.Search/> <span>Kendaraan</span>
        </button>
        &ensp;&ensp;
        <button class="btn-filter">
            <Icon.Search/><span>Baju</span>
        </button>
        &ensp;&ensp;
        <button class="btn-filter">
            <Icon.Search/><span>Elektronik</span>
        </button>
        &ensp;&ensp;
        <button class="btn-filter">
            <Icon.Search/> <span>Kesehatan</span>
        </button>

        <p><p></p></p>
        <DataDummy/>
      </div>


      <button class="btn-plus">
            <Icon.Plus/> Jual
        </button>
    </div>
  )
}

export default HomeMobile