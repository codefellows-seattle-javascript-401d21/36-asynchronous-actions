import React from 'react';
import { connect } from 'react-redux';
import { dogUpdateRequest } from '../../action/dog-action';
import DogForm from '../dog-form/index';
import { renderIf } from '../../lib/utils';

class DogItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
        };

        let memberFunctions = Object.getOwnPropertyNames(DogItem.prototype);
        for (let functionName of memberFunctions) {
            if (functionName.startsWith('handle')) {
                this[functionName] = this[functionName].bind(this);
            }
        }
    }

    handleGetSetState() {
        return {
            state: this.state,
            setState: this.setState.bind(this),
        };
    }

    handleClick(event) {
        event.preventDefault();
        this.props.onClick(this.props.dogItem);
    }

    handleDoubleClick(event) {
        event.preventDefault();
        this.setState({ editing: true });
    }

    render() {
        return <li
            key={this.props.dogItem._id}
        >
            <p onDoubleClick={this.handleDoubleClick}>{this.props.dogItem.title}: {this.props.dogItem.author}</p>

            <button
                className="delete"
                onClick={this.handleClick}>
                Delete
      </button>

            {renderIf(this.state.editing,
                <DogForm
                    editing={this.handleGetSetState()}
                    dog={this.props.dogItem}
                    buttonText="update"
                    onComplete={this.props.dogUpdate} />
            )}
        </li>;
    }
}

const mapStateToProps = state => ({
    dogs: state.dogs,
});

const mapDispatchToProps = (dispatch, getState) => ({
    dogUpdate: dog => dispatch(dogUpdateRequest(dog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DogItem);