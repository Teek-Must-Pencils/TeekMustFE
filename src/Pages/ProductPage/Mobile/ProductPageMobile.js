import React from 'react';
import { ArrowLeft } from 'react-feather';
import { ModalNotification } from '../../../Components';
import dummyProduct from '../../../Assets/Img/dummyProduct.png'
import Profile from '../../../Assets/Img/profile.png'
import ModalMobile from './ModalMobile';
import '../ProductPage.css';

const role = "sel";

const ProductPageMobile = (props) => {
  const {
    onSubmitSellerMobile,
    onSubmitBuyerMobile,
    handleModalBuyer,
    showModal,
    showNotif,
    notifMessage,
    toogleNotif,
  } = props;

  let buttonAction;
  if(role === "seller"){
    buttonAction= (
    <button 
      className='button-float-send'
      onClick={onSubmitSellerMobile}
    >
      Terbitkan
    </button>)
  }else{
    buttonAction = (<button 
      className='button-float-send'
      onClick={onSubmitBuyerMobile}
    >
      Saya Tertarik dan ingin Nego
    </button>)
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
          src={dummyProduct} alt="" 
        />
        <button 
          className='button-float-back'
          // onClick=''
        >
          <ArrowLeft size='20px'/>
        </button>
      </div>
        <div className='mobile-box-description'>
            <div className='mobile-box-info'>
              <span><b>Jam Tangan Casio</b></span>
              <span className='text-category'>Aksesoris</span>
              <span><b>Rp 250.000</b></span>
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
                  Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an 
                  unknown printer took a galley of type and scrambled 
                  it to make a type specimen book.
                  Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an 
                  unknown printer took a galley of type and scrambled 
                  unknown printer took a galley of type and scrambled 
                  unknown printer took a galley of type and scrambled 
                  it to make a type specimen book.
                </p>
            </div>
        </div>
        {buttonAction}
      </div>
    </>
  )
}

export default ProductPageMobile