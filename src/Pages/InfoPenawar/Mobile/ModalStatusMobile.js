import React from 'react'
import { Modal } from 'react-bootstrap'
import '../infoPenawar.css'





const ModalStatus = (props) => {

const { show, close } = props;
  return (
    <Modal
            size='lg'
            show={show}
            onHide={close}
            animation={false}
            className="modal-status"
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
                            Perbarui status penjualan produkmu
                        </div>


                        <div className="d-flex flex-row gap-2 ms-2">
                        <div className='me-2'>
                            <input type="radio" name='berhasil'/>
                            </div>
                            <div className=' d-flex flex-column'>
                                <span><b>Berhasil Terjual</b></span>
                                <span className="text-profile">
                                Kamu telah sepakat menjual produk ini kepada pembeli
                                </span>

                            </div>
                        </div>

                        <div className="d-flex flex-row gap-2 mt-1 mb-2 ms-2">
                            <div className='me-2'>
                            <input type="radio" name='batal'/>
                            </div>
                            <div className=' d-flex flex-column'>
                                <span><b>Batalkan transaksi</b></span>
                                <span className="text-profile">
                                Kamu membatalkan transaksi produk ini dengan pembeli
                                </span>
                            </div>
                        </div>
                    </div>




                    <button className='tombol-masuk mt-3 ' >
                        Kirim
                    </button>

                </div>
            </Modal.Body>


        </Modal>
  )
}

export default ModalStatus