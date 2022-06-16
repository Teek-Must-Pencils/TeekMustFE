import React from 'react';
import {Modal, Button} from 'react-bootstrap'

const ModalBuyer = (props) => {
    const {show, close} = props;
  return (
    <>
        <Modal show={show} onHide={close} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={close}>
                Close
            </Button>
            <Button variant="primary" onClick={close}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default ModalBuyer