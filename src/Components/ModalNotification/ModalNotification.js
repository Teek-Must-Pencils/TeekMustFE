import React from 'react';
import { Modal } from 'react-bootstrap';
import './ModalNotification.css'

const ModalNotification = (props) => {
    const { show, close, message } = props;
  return (
    <>
         <Modal 
            size='sm'
            show={show} 
            onHide={close} 
            animation={false}
            className="modal-notification"
        >
            <div className='modal-container-notification'>
                <div>
                    {message}
                </div> 
                <div>
                    <button
                        onClick={close}
                    >
                        X
                    </button>
                </div>
            </div>
        </Modal>
    </>
  )
}

export default ModalNotification