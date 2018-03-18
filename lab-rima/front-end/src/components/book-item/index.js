import React from 'react';
import {connect} from 'react-redux';
import {bookUpdateRequest} from '../../action/book-action';
import BookForm from '../book-form/index';
import {renderIf} from '../../lib/utils';

class BookItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      editing: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(BookItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
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
    this.props.onClick(this.props.bookItem);
  }

  handleDoubleClick(event) {
    event.preventDefault();
    this.setState({editing: true});
  }

  render(){
    return <li
      key={this.props.bookItem._id}
    >
      <p onDoubleClick={this.handleDoubleClick}>{this.props.bookItem.title}: {this.props.bookItem.author}</p>

      <button
        className="delete"
        onClick={this.handleClick}>
          Delete
      </button>

      {renderIf(this.state.editing,
        <BookForm
          editing={this.handleGetSetState()}
          book={this.props.bookItem}
          buttonText="update"
          onComplete={this.props.bookUpdate} />
      )}
    </li>;
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch, getState) => ({
  bookUpdate: book => dispatch(bookUpdateRequest(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
