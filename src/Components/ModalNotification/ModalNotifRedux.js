import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalNotificationRedux = (props) => {
    const { flag, message } = props;

  return (
    <>
        <Modal
            show={true}
            centered
        >
            <div className='modal-container-notification p-3'>
                <div>
                    {message}
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