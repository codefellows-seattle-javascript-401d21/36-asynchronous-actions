import React from 'react';
import { renderIf } from '../../lib/utils';

class AlbumForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.album ||
            {
                language: this.props.languageId,
                title: '',
                author: '',
            };

        let memberFunctions = Object.getOwnPropertyNames(AlbumForm.prototype);
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

        if (this.props.album) {
            this.setState(this.props.album);
        } else {
            this.setState({
                language: this.props.languageId,
                title: '',
                author: '',
            });
        }
    }

    handleClick(event) {
        event.preventDefault();

        this.props.editing.setState({ editing: false });

        if (this.props.album) {
            this.setState(this.props.album);
        } else {
            this.setState({
                language: this.props.languageId,
                title: '',
                author: '',
            });
        }
    }

    render() {
        return (
            <form
                className="album-form"
                onSubmit={this.handleSubmit}
                id="album-form">

                <input
                    className="title"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Enter a title" />

                <input
                    className="author"
                    type="text"
                    name="author"
                    value={this.state.author}
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

export default AlbumForm;