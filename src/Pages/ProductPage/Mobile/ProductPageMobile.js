import React from 'react';
import { ArrowLeft } from 'react-feather';
import { ModalNotification } from '../../../Components';
import dummyProduct from '../../../Assets/Img/dummyProduct.png'
import Profile from '../../../Assets/Img/profile.png'
import ModalMobile from './ModalMobile';
import '../ProductPage.css';
import { useNavigate } from 'react-router-dom';
import usePreview from '../../../Hooks/usePreview';

// const role = "sel";

const ProductPageMobile = (props) => {
  const {
    role,
    onSubmitSellerMobile,
    onSubmitBuyerMobile,
    handleModalBuyer,
    showModal,
    showNotif,
    notifMessage,
    toogleNotif,
  } = props;

  let navigate = useNavigate();
  const dataPreview = usePreview();

  let buttonAction;
  if(role.includes("seller")){
    buttonAction = (
    <button 
      className='button-float-send'
      onClick={onSubmitSellerMobile}
    >
      Terbitkan
    </button>)
  }else{
    buttonAction = (<button 
      className='button-float-send'
      onClick={handleModalBuyer}
    >
      Saya Tertarik dan ingin Nego
    </button>)
  }

  const handleBack = () =>{
    return navigate(-1)
  }

  const data = {
    name: "Jam Tangan Casio",
    category: "Aksesoris",
    image: dummyProduct,
    price: "Rp. 250.000",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }

  return (
    <>
      <ModalNotification 
          show={showNotif} 
          close={toogleNotif} 
          message={notifMessage}
        //   success={}
      />
      <ModalMobile 
        show={showModal}
        close={handleModalBuyer}
        onSubmitBuyerMobile={onSubmitBuyerMobile}
      />
      <div className='mobile-container'>
      <div className=''>
        <img 
          className='mobile-img' 
          src={data.image || dataPreview.image} alt="" 
        />
        <button 
          className='button-float-back'
          onClick={() => handleBack()}
        >
          <ArrowLeft size='20px'/>
        </button>
      </div>
        <div className='mobile-box-description'>
            <div className='mobile-box-info'>
              <span><b>{data.name || dataPreview.name}</b></span>
              <span className='text-category'>
                {data.category || dataPreview.category}
              </span>
              <span><b>{data.price || dataPreview.price}</b></span>
            </div>
            <div className='mobile-box-user'>
              <img src={Profile} alt='' />
              <div className='account'>
                  <p><b>Nama Penjual</b></p>
                  <p className="text-profile">kota</p>
              </div>
            </div>
            <div className='mobile-box-desc'>
                <p> <b>Deskripsi</b> </p>
                <p>
                 {data.description || dataPreview.description}
                </p>
            </div>
        </div>
        {buttonAction}
      </div>
    </>
  )
}

export default ProductPageMobile