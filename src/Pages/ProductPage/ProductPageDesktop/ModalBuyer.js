import React from 'react';
import {Modal} from 'react-bootstrap';
import './Modal.css';

const ModalBuyer = (props) => {
    const {show, close} = props;
  return (
    <>
        <Modal 
            size='sm'
            show={show} 
            onHide={close} 
            animation={false}
            centered
        >
            <Modal.Body>
            <div className='container modal-buyer'>
                <div className='flex-button'>
                    <button 
                        className='button-closed'
                        onClick={close}
                    >
                        X
                    </button>
                </div>
                <div className=''>
                    <div className='text-title'>
                        Masukkan Harga Tawarmu
                    </div>
                    <div className='text-noted'>
                        Harga tawaranmu akan diketahui penual,
                        jika penjual cocok kamu akan segera dihubungi penjual. 
                    </div>
                    <div className='box-product'>

                    </div>
                </div>
            </div>
                
            </Modal.Body>
        </Modal>
    </>
  )
}

export default ModalBuyer