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
// import "swiper/css/effect-coverflow";

const HomeDekstop = () => {
  const [filter, setFilter] = useState(0);
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
          onClick={() => setFilter(0)}
         >
            <Icon.Search/> <span>Semua</span>
        </button>
        &ensp;&ensp;
        <button 
          className="btn-filter"
          onClick={() => setFilter(1)}
        >
            <Icon.Search/> <span>Pencil 2B</span>
        </button>
        &ensp;&ensp;
        <button 
          className="btn-filter"
          onClick={() => setFilter(2)}
        >
            <Icon.Search/> <span>Pencil 3B</span>
        </button>
        &ensp;&ensp;
        <button 
          className="btn-filter"
          onClick={() => setFilter(3)}
        >
            <Icon.Search/> <span>Pencil 4B</span>
        </button>
        &ensp;&ensp;
        <button 
          className="btn-filter"
          onClick={() => setFilter(4)}
        >
            <Icon.Search/> <span>Pencil 5B</span>
        </button>
        &ensp;&ensp;
        <button 
          className="btn-filter"
          onClick={() => setFilter(5)}
        >
            <Icon.Search/> <span>Pencil Warna</span>
        </button>
      </div>
       

          {/* tabs */}
        {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link active" id="pills-one-tab" data-bs-toggle="pill"  data-bs-target="#pills-one"
               type="button" role="tab" aria-controls="pills-one" aria-selected="true"
            >
              <Icon.Search/> Semua
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link" id="pills-two-tab" data-bs-toggle="pill" data-bs-target="#pills-two" 
              type="button" role="tab" aria-controls="pills-two" aria-selected="false"
            >
             <Icon.Search/> Pencil 2B
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link" id="pills-three-tab" data-bs-toggle="pill" data-bs-target="#pills-three" 
              type="button" role="tab" aria-controls="pills-three" aria-selected="false"
            >
             <Icon.Search/> Pencil 3B
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link" id="pills-four-tab" data-bs-toggle="pill" data-bs-target="#pills-four" 
              type="button" role="tab" aria-controls="pills-four" aria-selected="false"
            >
             <Icon.Search/> Pencil 4B
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link" id="pills-five-tab" data-bs-toggle="pill" data-bs-target="#pills-five" 
              type="button" role="tab" aria-controls="pills-five" aria-selected="false"
            >
             <Icon.Search/> Pencil 4B
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active" id="pills-one" 
            role="tabpanel" aria-labelledby="pills-one-tab"
          >
            one
          </div>
          <div 
            className="tab-pane fade" id="pills-two" role="tabpanel" 
            aria-labelledby="pills-two-tab"
          >
            two
          </div>
          <div 
            className="tab-pane fade" id="pills-three" 
            role="tabpanel" aria-labelledby="pills-three-tab"
          >
            three
          </div>
          <div 
            className="tab-pane fade" id="pills-four" 
            role="tabpanel" aria-labelledby="pills-four-tab"
          >
            four
          </div>
          <div 
            className="tab-pane fade" id="pills-five" 
            role="tabpanel" aria-labelledby="pills-five-tab"
          >
            five
          </div>
        </div> */}

      <DataDummy 
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

export default HomeDekstop