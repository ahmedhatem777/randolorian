import React from 'react';
import Button from 'react-bootstrap/Button';
import './option.component.scss';

const Option = (props) => (
    <div className="flexed">
        <p className="option-text"> <strong>{props.option}</strong></p>
        <Button
            className="btn btn-outline-secondary rounded-0 btn-sm"
            onClick={(e) => props.removeOneHandler(props.option)}
        >
            X
        </Button>
    </div>
)

export default Option;