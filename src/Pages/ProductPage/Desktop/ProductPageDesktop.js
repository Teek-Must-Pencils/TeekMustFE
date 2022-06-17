import React from 'react';
import ModalBuyer from './ModalBuyerDesktop';
import { ModalNotification } from '../../../Components';
import dummyProduct from '../../../Assets/Img/dummyProduct.png'
import dummyProfile from '../../../Assets/Img/profile.png'
import '../ProductPage.css'
const role = 'seller';
// const role = 'buyer';

const ProductPageDesktop = (props) => {
    const {
        showModal,
        handleModalBuyer,
        notifMessage,
        showNotif,
        toogleNotif,
        onSubmitBuyerModalDesktop,
        onSubmitSellerModalDesktop,
    } = props;
    
    let buttonBox;
        
    if(role === 'seller'){
        buttonBox = 
        <>
            <button 
                className="btn btn-primary w-100 my-3"
                onClick={onSubmitSellerModalDesktop}
            >
                Terbitkan
            </button>
            <button className="btn btn-outline-primary w-100 mb-3">
                Edit
            </button>
        </>
    }else{
        buttonBox=  <>
            <button 
                className="button-buyer"
                onClick={handleModalBuyer}
            >
                Saya tertarik dan ingin nego
            </button>
        </>
    }

    
        
  return (
    <>
        <ModalNotification 
          show={showNotif} 
          close={toogleNotif} 
          message={notifMessage}
        //   success={}
        />
        <ModalBuyer 
            show={showModal} 
            close={handleModalBuyer} 
            onSubmitBuyerModalDesktop={onSubmitBuyerModalDesktop}
        />
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="d-flex flex-column">
                        <div className='d-flex flex-row justify-content-center'>
                            <img className='img-product' src={dummyProduct} alt="" />
                        </div>
                        <div className='text-desc'>
                            <p> <b>Deskripsi</b> </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an 
                                unknown printer took a galley of type and scrambled 
                                it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='box-action'>
                        <h6>Jam Tangan Casio</h6>
                        <p className="text-category">
                            Aksesoris
                        </p>
                        <h6>Rp. 250.000</h6>
                        {buttonBox}
                    </div>
                    <div className="box-action my-5">
                        <div className="d-flex flex-row gap-2">
                            <img src={dummyProfile} alt="" />
                            <div className='d-flex flex-column'>
                                <span><b>Nama Penjual</b></span>
                                <span className="text-profile">
                                    kota
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductPageDesktop