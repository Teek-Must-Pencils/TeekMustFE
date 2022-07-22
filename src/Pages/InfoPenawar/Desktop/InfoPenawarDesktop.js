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

const InfoPenawarDesktop = (props) => {
    const { 
        OnSubmitAccepted, OnSubmitReject, isAccepted,
        modalShow, handleModalClosed,
        modalStatusShow, handleModalShowClosed,
        handleModalStatusOpen, handleModalOpen,
        user, offer, product
    }= props;
    const navigate = useNavigate();
    const flag = offer?.status === 'waiting'? true : false

    const handleBack = () =>{
        navigate(-1)
    }    

    let buttonBox;
    if (flag) {
        buttonBox = (
            <>
                <button className='tombol-tolak me-2' onClick={OnSubmitReject}>
                    Tolak
                </button>
                <button type='button' className='tombol-terima ms-2 ' onClick={OnSubmitAccepted} >
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
    const myData = product?.find((item) => item.id === offer?.productId)
    const myUser = user?.find((item) => item.id === offer?.userId)

    console.log('myData',myData)
    console.log('myData',myData)
    console.log('offer',offer)
    console.log('data',product)

    return (
        <>
        <div className='container-content'>
            <MyVerticallyCenteredModal
                show={modalShow}
                close={handleModalClosed}
            />

            <ModalStatus
                show={modalStatusShow}
                close={handleModalShowClosed}
            />


            <Col md={{ span: 8, offset: 2 }}>
                <Row className='align-content-center'>
                    <div className='col-1'>
                        <Image src={iconBack} onClick={()=> handleBack()} />
                    </div>
                    <div className='col-11'>
                        <div className="box-action color-content">
                            <div className="d-flex flex-row gap-2">
                                <img 
                                    // src={user?.imgB ? `data:image/png;base64,${user?.imgB}` : dummyProduct} alt=""
                                    src={dummyProfile} alt=""
                                />
                                <div className='d-flex flex-column ms-1'>
                                    <span><b>{myUser?.username || '-'}</b></span>
                                    <span className="text-profile">
                                        {myUser?.address || '-'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='my-4 d-flex justify-content-between'>
                            <span><b>Daftar Produkmu yang Ditawar</b></span>
                            <span className="text-profile"> 20 Apr, 14:04 </span>
                        </div>
                        <div className='color-content py-1 px-2 my-1 rounded shadow-lg'>
                             <div className="d-flex flex-row gap-2 mt-4">
                                <div className='me-2 w-25'>
                                    <img className='w-100 h-100'
                                       src={myData?.imgB ? `data:image/png;base64,${myData?.imgB}` : dummyProduct} alt="" 
                                    />
                                </div>
                                <div className='w-100 d-flex flex-column justify-content-center'>
                                    <span className="text-profile">
                                        Penawaran Produk
                                    </span>
                                    <span><b>{myData?.name || '-'}</b></span>
                                    <span>Rp. {myData?.price || '-'}</span>
                                    <span className='text-tawaran'> 
                                        Ditawar Rp.{offer?.priceNegotiated || '-'}
                                    </span>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center my-2 ">
                                {buttonBox}
                            </div>
                        </div>
                    </div>
                </Row>
            </Col>
          </div>
        </>
    )
}

export default InfoPenawarDesktop