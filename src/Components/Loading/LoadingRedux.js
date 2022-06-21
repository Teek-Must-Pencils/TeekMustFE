import React from 'react';
import { Spinner, Modal } from 'react-bootstrap';

const ModalLoadingRedux = (props) => {
    const { flag } = props;
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
            <div className='d-flex flex-row gap-5 p-3'>
                <Spinner size='lg' animation="border" role="status"/>
                <span className="">Loading...</span>
            </div>
        </Modal>
    </>
  )
}

export default ModalLoadingRedux