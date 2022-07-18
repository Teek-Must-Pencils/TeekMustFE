import React from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slide2 from '../../../Assets/Img/Group 9.png'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchActions } from '../../../Redux/slice/searchSlice';
import './HomeMobile.css'

// Import Swiper styles
import "swiper/css";
import { DataNotFound, CardProduct } from '../../../Components';

const HomeMobile = (props) => {
  const { data, role, category } = props;
  const dispatch =  useDispatch();
  // const [filter, setFilter] = useState('');

  const handleCategories = (id) =>{
    let result;
    if (id === 1) { result = "Pencil 2B"}
    else if(id === 2){ result = "Color Pencil 8"}
    else if(id === 3){ result = "Color Pencil 12"}
    else if(id === 4){ result = "Color Pencil 24"}
    return result;
  }

  // let dataView;
  // if(filter === ''){
  //   dataView = data
  // }else{
  //   dataView = data.filter((value) => 
  //     value.categories.includes(filter?.toUpperCase())
  //   )
  // }
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
          // onClick={() => setFilter('')}
          onClick={() => handleSearchCategory('')}
         >
            <Icon.Search className='icon-mobile'/> Semua
        </button>
        {category.length > 1 && category?.map((value)=>{
              return(
                <button 
                  key={value.id}
                  className="btn-filter-mobile"
                  // onClick={() => setFilter(value.categories)}
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
          {/* {dataView.length < 1 && (<DataNotFound />)}
          {dataView.length > 1 && dataView.map((item, idx) => {
            return (
              <Col className='p-3' lg={3} md={3} xs={6} key={idx}>
                <CardProduct data={item}/>
              </Col>
              )
          })} */}
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