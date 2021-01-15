import React from 'react';
import Header from './components/header/header.component';
import Action from './components/action/action.component';
import Options from './components/options/options.component';
import AddOption from './components/add-option/add-option.component';
import ChoiceModal from './components/choice-modal/choice-modal.component';
import './styles/custom-bootstrap.scss';
import './styles/_container.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        options: [],
        selectedOption: undefined,
        title: 'The Randolorian',
        subtitle: 'I will decide...'
    }

    addNewOption = (option) => {
        //Returning error if one
        if (!option) {
            return `Don't add spaces!`;
        }
        else if (this.state.options.indexOf(option) > -1) {
            return `Option already exists!`;
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    removeOneOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((optionElement) => optionElement !== option)
        }))
    }

    removeAllOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    chooseOption = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const chosenOption = this.state.options[randomNumber];
        this.setState( () => ({selectedOption: chosenOption}))
    }

    closeModal = () => {
        this.setState(() => ({selectedOption: undefined}))
    }
   
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) this.setState(() => ({ options }));
        }
        catch (e) {
            this.setState(() => ({ options: [] }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {

            //Taking new options array and storing it in the local storage
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render() {
        return (
            <div className="container-fluid my-container">

                <div className="row header-row">
                    <div className="col col-header">
                        <Header
                            title={this.state.title}
                            subtitles={this.state.subtitle}
                        />
                    </div>
                </div>

                <div className="row justify-content-center action-row">
                    <Action
                        hasOptions={this.state.options.length > 1}
                        chooseHandler={this.chooseOption}
                    />
                </div>

                <div className="row justify-content-center options-row">
                    <div className="col-md-3">
                        <Options
                            options={this.state.options}
                            hasOptions={this.state.options.length > 0}
                            removeAllHandler={this.removeAllOptions}
                            removeOneHandler={this.removeOneOption}
                        />
                    </div>
                </div>

                <div className="row justify-content-center add-option-row">
                    <div className="col-md-4">
                        <AddOption
                            handleAddOption={this.addNewOption}
                        />
                    </div>
                </div>

                <ChoiceModal
                    selectedOption={this.state.selectedOption}
                    closeHandler={this.closeModal}
                />
            </div>
        )
    }
}

export default App;