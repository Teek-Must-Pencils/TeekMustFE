import React from 'react';
import { ArrowLeft } from 'react-feather';
import { ModalNotification } from '../../../Components';
// import dummyProduct from '../../../Assets/Img/dummyProduct.png'
import Profile from '../../../Assets/Img/profile.png'
import ModalMobile from './ModalMobile';
import '../ProductPage.css';
import { useNavigate } from 'react-router-dom';
import usePreview from '../../../Hooks/usePreview';

const ProductPageMobile = (props) => {
  const {
    product,
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

  return (
    <>
      <ModalNotification 
          show={showNotif} 
          close={toogleNotif} 
          message={notifMessage}
        //   success={}
      />
      <ModalMobile 
        product={product}
        show={showModal}
        close={handleModalBuyer}
        onSubmitBuyerMobile={onSubmitBuyerMobile}
      />
      <div className='mobile-container'>
      <div className=''>
        <img 
          className='mobile-img' 
          src={`data:image/png;base64,${product?.imgB}`||dataPreview.image} 
          alt="" 
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
              <div><b>{product?.name || dataPreview.name}</b></div>
              <div className='text-category'>
                {product?.categories || dataPreview.category}
              </div>
              <div><b>Rp. {product?.price || dataPreview.price}</b></div>
            </div>
            <div className='mobile-box-user'>
              <img src={Profile} alt='' />
              <div className='account'>
                  <div><b>{product?.username || dataPreview.seller || "Unknow" }</b></div>
                  <div className="text-profile">
                    {product?.city}
                  </div>
              </div>
            </div>
            <div className='mobile-box-desc'>
                <p> <b>Deskripsi</b> </p>
                <p>
                 {product?.description || dataPreview.description}
                </p>
            </div>
        </div>
        {buttonAction}
      </div>
    </>
  )
}

export default ProductPageMobile