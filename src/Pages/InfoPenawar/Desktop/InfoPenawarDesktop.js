import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Row, Image, Col, Modal } from 'react-bootstrap'
import dummyProfile from '../../../Assets/Img/cewe.png'
import dummyProduct from '../../../Assets/Img/jamkecil.png'
import iconBack from '../../../Assets/Img/fi_arrow-left.png'
import iconWA from '../../../Assets/Img/Whatsapp.png'
import '../infoPenawar.css'
import ModalStatus from './ModalStatusDesktop'



function MyVerticallyCenteredModal(props) {

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
                        Hubungi via Whatsapp <Image className='ms-2' src={iconWA} />
                    </button>

                </div>
            </Modal.Body>


        </Modal>
    );
}

const InfoPenawarDesktop = () => {
    const navigate = useNavigate();
    const [isAccepted, setIsAccepted] = React.useState(true)
    const [modalShow, setModalShow] = React.useState(false);
    const [modalStatusShow, setModalStatusShow] = React.useState(false);

    const handleModalOpen = () => {
        setModalShow(true)
        handleIsAccepted()
    }

    const handleModalStatusOpen = () => {
        setModalStatusShow(true)
        handleIsAccepted()
    }

    const handleModalClosed = () => {
        setModalShow(false)
    }

    const handleIsAccepted = () => {
        setIsAccepted(false)//ganti button
    }

    const handleBack = () =>{
        navigate('/')
    }

    

    let buttonBox;
    if (isAccepted) {
        buttonBox = (
            <>
                <button className='tombol-tolak me-2 ' onClick={handleIsAccepted}>
                    Tolak
                </button>
                <button type='button' className='tombol-terima ms-2 ' onClick={handleModalOpen} >
                    Terima
                </button>
            </>
        )
    } else {
        buttonBox = (
            <>
                <button className='tombol-tolak me-2 ' onClick={handleModalStatusOpen}>
                    Status
                </button>
                <button type='button' className='tombol-terima ms-2 ' onClick={handleModalOpen} >
                    Hubungi
                </button>
            </>
        )
    }

    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                close={handleModalClosed}
            />

            <ModalStatus
                show={modalStatusShow}
                close={handleModalClosed}
            />


            <Col md={{ span: 5, offset: 3 }}>
                <Row className='align-content-center'>
                    <div className='col-1'>
                        <Image src={iconBack} onClick={()=> handleBack()} />
                    </div>
                    <div className='col-11'>
                        <div className="box-action">
                            <div className="d-flex flex-row gap-2 b">
                                <img src={dummyProfile} alt="" />
                                <div className='d-flex flex-column ms-1'>
                                    <span><b>Nama Pembeli</b></span>
                                    <span className="text-profile">
                                        kota
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='mt-4 d-flex justify-content-between'>
                            <span><b>Daftar Produkmu yang Ditawar</b></span>
                            <span className="text-profile"> 20 Apr, 14:04 </span>
                        </div>

                        <div className="d-flex flex-row gap-2 b mt-4">
                            <div className='me-2'>
                                <img src={dummyProduct} alt="" />
                            </div>
                            <div className=' d-flex flex-column'>
                                <span className="text-profile">
                                    Penawaran Produk
                                </span>
                                <span>Jam Tangan Casio</span>
                                <span> Rp 250.000</span>
                                <span> Ditawar Rp 200.000</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end mt-2 ">

                            {/* <button className='tombol-tolak me-2 '>
                                Tolak
                            </button>
                            <button type='button' className='tombol-terima ms-2 ' onClick={handleModalOpen} >
                                Terima
                            </button> */}
                            {buttonBox}
                        </div>

                    </div>


                </Row>
            </Col>
        </>



    )
}

export default InfoPenawarDesktop