import React from 'react';
import Option from '../option/option.component';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './options.component.scss';

const Options = (props) => (
    <Card className="card text-secondary bg-primary rounded-0">
        <div className="card-header">
            <h4 className="card-header-text">Options:</h4>
            <Button
                // size="sm"
                className="btn-outline-secondary rounded-0"
                onClick={props.removeAllHandler}
                disabled={!props.hasOptions}
            >
                Remove All
            </Button>
        </div>

        <div className="card-body overflow-auto">
            {
                props.options.map(option => (
                    <Option
                        key={option}
                        option={option}
                        removeOneHandler={props.removeOneHandler}
                    />))
            }

            {
                !props.hasOptions
                &&
                <p className="options-alert text-center text-secondary">
                    <strong>Please add some options.</strong>
                </p>
            }
        </div>
    </Card>
)

export default Options;
