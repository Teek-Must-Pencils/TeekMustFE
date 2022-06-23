import React from 'react';
import { Spinner, Modal } from 'react-bootstrap';

const ModalLoading = (props) => {
    const { show, close } = props;

  return (
    <>
        <Modal 
            size='md'
            show={show} 
            onHide={close} 
            className=""
            centered
        >
        <div className='d-flex flex-row justify-content-center gap-5 p-3'>
            <Spinner size='lg' animation="border" role="status"/>
            <span className="">Loading...</span>
        </div>
          
        </Modal>
  
    </>
  )
}

export default ModalLoading