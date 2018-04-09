import React from 'react';
import { renderIf } from '../../lib/utils';

class DogForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.dog ||
            {
                breed: this.props.breedId,
                name: '',
                age: '',
            };

        let memberFunctions = Object.getOwnPropertyNames(DogForm.prototype);
        for (let functionName of memberFunctions) {
            if (functionName.startsWith('handle')) {
                this[functionName] = this[functionName].bind(this);
            }
        }
    }

    handleChange(event) {
        let { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onComplete(this.state);

        if (this.props.dog) {
            this.setState(this.props.dog);
        } else {
            this.setState({
                breed: this.props.breedId,
                name: '',
                age: '',
            });
        }
    }

    handleClick(event) {
        event.preventDefault();

        this.props.editing.setState({ editing: false });

        if (this.props.dog) {
            this.setState(this.props.dog);
        } else {
            this.setState({
                breed: this.props.breedId,
                name: '',
                age: '',
            });
        }
    }

    render() {
        return (
            <form
                className="dog-form"
                onSubmit={this.handleSubmit}
                id="dog-form">

                <input
                    className="name"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Enter a name" />

                <input
                    className="age"
                    type="text"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange} />

                <button
                    className="save"
                    type="submit">
                    {this.props.buttonText}
                </button>

                {renderIf(this.props.editing,
                    <button
                        className="cancel"
                        type="button"
                        onClick={this.handleClick}>
                        cancel
          </button>
                )}
            </form>
        );
    }
}

export default DogForm;