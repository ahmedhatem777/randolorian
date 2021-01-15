import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './add-option.component.scss';

class AddOption extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        error: undefined
    }

    formSubmit = (event) => {
        event.preventDefault();

        const newOption = event.target.elements.option.value.trim();

        //Calling the addNewOption method declared in the App component, and giving it the new option text, and atching error if one
        const error = this.props.handleAddOption(newOption);

        //Clearing the input field and refocusing on it if there is no error
        if (!error) event.target.elements.option.value = '';

        event.target.elements.option.focus();

        this.setState(() => ({ error }));
    }

    render() {
        return (
            <div className="container">
                <Form className="my-form" onSubmit={this.formSubmit}>
                    <InputGroup className="my-input">
                        <FormControl
                            name="option"
                            autoComplete="off"
                            className="rounded-0"
                            placeholder="Your Option"
                        />
                        <InputGroup.Append>
                            <Button
                                type="submit"
                                className="btn-primary text-secondary rounded-0"
                            >
                                <strong>Add</strong>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                {
                    this.state.error &&
                    <Alert className="bg-primary text-secondary rounded-0 my-alert">
                        {this.state.error}
                    </Alert>
                }
            </div>
        )
    }
}

export default AddOption;