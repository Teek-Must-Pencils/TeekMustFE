import React, { useState } from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
import slide2 from '../../../Assets/Img/Group 9.png'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { DataDummy } from '../DataDummy/DataDummy'
import './HomeMobile.css'

// Import Swiper styles
import "swiper/css";
import {NavbarMobile} from '../../../Components';

const HomeMobile = () => {
  const [filter, setFilter] = useState(0);

  return (
    <div>
      <NavbarMobile />
      <img src={slide2} alt="" className="slide2" />
      <br></br>
      <div className="container-sm">
      <font size="3"><b>Telusuri Kategori</b></font>
      <div className='content-filter-mobile'>
        <button 
          className="btn-filter-mobile"
          onClick={() => setFilter(0)}
         >
            <Icon.Search className='icon-mobile'/> Semua
        </button>
        &ensp;&ensp;
        <button 
          className="btn-filter-mobile"
          onClick={() => setFilter(1)}
        >
            <Icon.Search className='icon-mobile'/> Pencil 2B
        </button>
        &ensp;&ensp;
        <button 
          className="btn-filter-mobile"
          onClick={() => setFilter(2)}
        >
            <Icon.Search className='icon-mobile'/> Pencil 3B
        </button>
        &ensp;&ensp;
        <button 
          className="btn-filter-mobile"
          onClick={() => setFilter(3)}
        >
            <Icon.Search className='icon-mobile'/> Pencil 4B
        </button>
        &ensp;&ensp;
        <button 
          className="btn-filter-mobile"
          onClick={() => setFilter(4)}
        >
            <Icon.Search className='icon-mobile'/> Pencil 5B
        </button>
        &ensp;&ensp;
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
      />
      </div>

      <Link to="/infoProduct">
        <button className="btn-plus">
            <Icon.Plus/> Jual
        </button>
      </Link>
    </div>
  )
}

export default HomeMobile