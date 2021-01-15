import React from 'react';
import Button from 'react-bootstrap/Button';
import './action.component.scss'

const Action = (props) =>(
        <div className="action-container">
            <Button
                style={{ color: "#CF5C36"}}
                className="btn rounded-0 btn-lg"
                variant="primary"
                onClick={props.chooseHandler}
                disabled={!props.hasOptions}
            >
                Show me the way.
            </Button>
        </div>
    )

export default Action;