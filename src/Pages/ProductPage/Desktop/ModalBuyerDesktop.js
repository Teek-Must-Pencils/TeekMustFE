import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Modal } from 'react-bootstrap';
import dummyProduct from '../../../Assets/Img/dummyProduct.png'
import '../Modal.css';

const ModalBuyer = (props) => {
    const { register, handleSubmit, reset } = useForm();
    const {
        show, close, onSubmitBuyerModalDesktop, product
    } = props;

    useEffect(() => {
    
      return () => {
        reset()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])
    
    
  return (
    <>
        <Modal 
            size='md'
            show={show} 
            onHide={close} 
            animation={false}
            centered
        >
            <Modal.Body>
            <div className='modal-buyer'>
                <div className='modal-button'>
                    <button 
                        className='modal-button-closed'
                        onClick={close}
                    >
                        X
                    </button>
                </div>
                <div className="modal-container-info">
                    <div className='modal-text-title'>
                        Masukkan Harga Tawarmu
                    </div>
                    <div className='modal-text-noted'>
                        Harga tawaranmu akan diketahui penual,
                        jika penjual cocok kamu akan segera dihubungi penjual. 
                    </div>
                    <div className="modal-box-product">
                        <img 
                            className='modal-bp-image' 
                            src={product?.img ? `data:image/png;base64,${product?.img}` : dummyProduct} 
                            alt="" 
                        />
                        <div className='modal-bp-info'>
                            <span>{product?.name}</span>
                            <span>Rp. {product?.price}</span>
                        </div>
                    </div>
                </div>
                <div className='modal-form'>
                    <form onSubmit={handleSubmit(onSubmitBuyerModalDesktop)}>
                        <label>Harga Penawaran</label>
                        <input 
                            type="number" 
                            name="PriceOffer"
                            placeholder="Rp. 0,00" 
                            {...register("PriceOffer")}
                            required
                        />
                        <button type='submit'>
                            Kirim
                        </button>
                    </form>
                </div>
            </div>
                
            </Modal.Body>
        </Modal>
    </>
  )
}

export default ModalBuyer