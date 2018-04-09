import React from 'react';
import { connect } from 'react-redux';
import { breedUpdateRequest } from '../../action/breed-action';
import { dogCreateRequest, dogDeleteRequest } from '../../action/dog-action';
import BreedForm from '../breed-form/index';
import BookForm from '../dog-form/index';
import BookItem from '../dog-item/index';
import { renderIf } from '../../lib/utils';


class BreedItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
        };

        let memberFunctions = Object.getOwnPropertyNames(BreedItem.prototype);
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
        this.props.onClick(this.props.breedItem);
    }

    handleDoubleClick(event) {
        event.preventDefault();
        this.setState({ editing: true });
    }

    render() {
        console.log('props in breeditem', this.props);
        return <li
            key={this.props.key}
        >
            <h3 onDoubleClick={this.handleDoubleClick}>{this.props.breedItem.name}</h3>

            <button
                className="delete"
                onClick={this.handleClick}>
                Delete
      </button>

            {renderIf(this.state.editing,
                <BreedForm
                    editing={this.handleGetSetState()}
                    breed={this.props.breedItem}
                    buttonText="update"
                    onComplete={this.props.breedUpdate} />
            )}

            <section>
                <h4>{this.props.breedItem.name}</h4>

                <BookForm
                    breedId={this.props.breedItem._id}
                    buttonText='create'
                    onComplete={this.props.dogCreate} />

                <ul>
                    {this.props.breedItem._id in this.props.dogs ?
                        this.props.dogs[this.props.breedItem._id].map(dog => {
                            return <BookItem
                                key={dog._id}
                                dogItem={dog}
                                onClick={this.props.dogDelete} />;
                        })
                        :
                        undefined
                    }
                </ul>
            </section>
        </li>;
    }
}

const mapStateToProps = state => ({
    dogs: state.dogs,
});

const mapDispatchToProps = (dispatch, getState) => ({
    breedUpdate: breed => dispatch(breedUpdateRequest(breed)),
    dogCreate: dog => dispatch(dogCreateRequest(dog)),
    dogDelete: dog => dispatch(dogDeleteRequest(dog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedItem);