import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalNotificationRedux = (props) => {
    const { flag, message } = props;
    let show;

    if(flag === "pending"){
        show = true;
    }else{
        show= false;
    }


  return (
    <>
        <Modal
            show={show}
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