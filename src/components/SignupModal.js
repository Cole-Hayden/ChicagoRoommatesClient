import React, {Component } from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class SignupModal extends Component {
    constructor(props) {
        super(props);
    }
    

    render(){
        return(
            <>
            <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>TESTING 1 2 3 !!!! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
        )
    }

}