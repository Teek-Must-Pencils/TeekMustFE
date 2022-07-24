import React from 'react'
import { Row, Image, Col, Modal } from 'react-bootstrap'
import dummyProfile from '../../../Assets/Img/cewe.png'
import dummyProduct from '../../../Assets/Img/jamkecil.png'
import iconWA from '../../../Assets/Img/Whatsapp.png'
import '../infoPenawar.css'
import ModalStatus from './ModalStatusMobile'
import NavbarMoblile from './NavbarMoblile'



function MyVerticallyCenteredModal(props) {

    const { show, close, product, user } = props;


    return (
        <Modal
            size='sm'
            show={show}
            onHide={close}
            animation={false}
            className="modal-mobile-position"
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
                                <img className='ifp-img'
                                    src={user?.imgB ? `data:image/png;base64,${user?.imgB}` : dummyProfile} alt=""
                                />
                                <div className='d-flex flex-column p-1 justify-content-center ms-1'>
                                    <span><b>{user?.username || '-'}</b></span>
                                    <span className="text-profile">
                                        {user?.address || '-'}
                                    </span>
                                </div>
                            </div>

                            <div className="d-flex flex-row gap-2 mt-1 mb-2 ms-2">
                                <div className='me-2 w-25'>
                                    <img className='w-100 h-100'
                                    src={product?.img ? `data:image/png;base64,${product?.img}` : dummyProduct} alt="" 
                                    />
                                </div>
                                <div className='w-100 d-flex flex-column justify-content-center'>
                                    <span className="text-profile">
                                        Penawaran Produk
                                    </span>
                                    <span><b>{product?.name || '-'}</b></span>
                                    <span>Rp. {product?.price || '-'}</span>
                                </div>
                            </div>
                        </div>

                    </div>


                    <button className='tombol-masuk mt-3 ' >
                        Hubungi via Whatsapp <Image className='ms-2' src={iconWA}/> {user?.number}
                    </button>

                </div>
            </Modal.Body>


        </Modal>
    );
}

const InfoPenawarMobile = (props) => {
    const { 
        OnSubmitAccepted, OnSubmitReject,
        modalShow, handleModalClosed,
        modalStatusShow, handleModalShowClosed,
        handleModalStatusOpen, handleModalOpen,
        user, offer, product
    }= props;
    const flag = offer?.status === 'waiting'? true : false

    let buttonBox;
    if (flag) {
        buttonBox = (
            <>
                <button className='tombol-tolak me-2 ' onClick={OnSubmitReject}>
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
                <button className='tombol-tolak me-2 'onClick={handleModalStatusOpen}>
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

    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                close={handleModalClosed}
                user={myUser}
                product={myData}
            />

            <ModalStatus
                show={modalStatusShow}
                close={handleModalShowClosed}
            />
            <NavbarMoblile/>
            <Col md={{ span: 5, offset: 3 }}>
                <Row className='align-content-center justify-content-center'>
                    <div className='col-11'>
                        <div className="box-action mt-3 ">
                            <div className="d-flex flex-row gap-2 ms">
                                <img className='ifp-img'
                                    src={myUser?.imgB ? `data:image/png;base64,${myUser?.imgB}` : dummyProfile} alt=""
                                />
                                <div className='d-flex flex-column p-1 justify-content-center ms-1'>
                                    <span><b>{myUser?.username || '-'}</b></span>
                                    <span className="text-profile">
                                        {myUser?.address || '-'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='mt-4 d-flex justify-content-between'>
                            <span><b>Daftar Produkmu yang Ditawar</b></span>
                            <span className="text-profile"> 20 Apr, 14:04 </span>
                        </div>

                        <div className='d-flex flex-column rounded rounded-xl p-3 color-content'>
                            <div className="d-flex flex-row gap-2 b mt-4 ms-4">
                                <div className='me-2 w-25'>
                                    <img className='w-100 h-100'
                                        src={myData?.img ? `data:image/png;base64,${myData?.img}` : dummyProduct} alt="" 
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
                            <div className="d-flex justify-content-between mt-4 ms-4 ">
                                {buttonBox}
                            </div>
                        </div>
                        

                    </div>


                </Row>
            </Col>
        </>



    )
}

export default InfoPenawarMobile