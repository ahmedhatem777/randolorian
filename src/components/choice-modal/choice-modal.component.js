import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ChoiceModal = (props) => (
    <Modal
        size="sm"
        show={!!props.selectedOption}
        onHide={props.closeHandler}
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>This is the way</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {props.selectedOption}
        </Modal.Body>

        <Modal.Footer>
            <Button
                variant="secondary"
                onClick={props.closeHandler}
            >
                Close
                </Button>
        </Modal.Footer>
    </Modal>
)

export default ChoiceModal;