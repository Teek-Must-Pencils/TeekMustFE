import React from 'react';
import { Modal } from 'react-bootstrap';
import { XCircle, CheckCircle } from 'react-feather';

const ModalNotificationRedux = (props) => {
    const { message, status } = props;

    console.log(status  === 'reject')

  return (
    <>
        <Modal
            show={true}
            centered
        >
            <div className={`
                modal-container-notification p-3
                ${status === 'reject' ? 'redux-reject':'redux-success'}
            `}>
                <div className=''>
                {status === 'reject' ? <XCircle/>:<CheckCircle/>}{' '}{message}
                </div> 
                {/* <div>
                    <button
                        onClick={close}
                    >
                        X
                    </button>
                </div> */}
            </div>
        </Modal>
    </>
  )
}

export default ModalNotificationRedux