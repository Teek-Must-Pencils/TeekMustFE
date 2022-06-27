import React from 'react'
import { Image, Modal } from 'react-bootstrap'
import dummyProfile from '../../Assets/Img/cewe.png'
import dummyProduct from '../../Assets/Img/jamkecil.png'
import iconWA from '../../Assets/Img/Whatsapp.png'
import './infoPenawar.css'



const ModalWA = (props) => {

    const { show, close } = props;


    return (
        <Modal
            size='sm'
            show={show}
            onHide={close}
            animation={false}
            centered
        >
            <Modal.Body >
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
                            Yeay kamu berhasil mendapat harga yang sesuai
                        </div>
                        <div className='modal-text-noted'>
                            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
                        </div>
                        <div className="modal-box-product d-flex flex-column">

                            <div className='text-center mt-2'>
                                <span><b>Product Match</b></span>
                            </div>

                            <div className="d-flex flex-row gap-2 ms-2">
                                <div className='me-2'>
                                    <img src={dummyProfile} alt="" />
                                </div>
                                <div className=' d-flex flex-column'>
                                    <span><b>Nama Pembeli</b></span>
                                    <span className="text-profile">
                                        kota
                                    </span>

                                </div>
                            </div>

                            <div className="d-flex flex-row gap-2 mt-1 mb-2 ms-2">
                                <div className='me-2'>
                                    <img src={dummyProduct} alt="" />
                                </div>
                                <div className=' d-flex flex-column'>
                                    <span>Jam Tangan Casio</span>
                                    <span><s> Rp 250.000 </s></span>
                                    <span> Ditawar Rp 200.000</span>
                                </div>
                            </div>
                        </div>

                    </div>


                    <button className='tombol-masuk mt-3 ' >
                        Hubungi via Whatsapp <Image className='ms-2' src={iconWA}/>
                    </button>

                </div>
            </Modal.Body>


        </Modal>
    );
}

export default ModalWA