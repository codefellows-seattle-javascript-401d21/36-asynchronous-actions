import React from 'react';
import {connect} from 'react-redux';
import {languageUpdateRequest} from '../../action/language-action';
import {bookCreateRequest, bookDeleteRequest} from '../../action/book-action';
import LanguageForm from '../language-form/index';
import BookForm from '../book-form/index';
import BookItem from '../book-item/index';
import {renderIf} from '../../lib/utils';


class LanguageItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      editing: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(LanguageItem.prototype);
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
    this.props.onClick(this.props.languageItem);
  }

  handleDoubleClick(event) {
    event.preventDefault();
    this.setState({editing: true});
  }

  render(){
    console.log(this.props);
    return <li
      key={this.props.key}
    >
      <h3 onDoubleClick={this.handleDoubleClick}>{this.props.languageItem.name}</h3>

      <button
        className="delete"
        onClick={this.handleClick}>
          Delete
      </button>

      {renderIf(this.state.editing,
        <LanguageForm
          editing={this.handleGetSetState()}
          language={this.props.languageItem}
          buttonText="update"
          onComplete={this.props.languageUpdate} />
      )}

      <section>
        <h4>{this.props.languageItem.name}</h4>

        <BookForm
          languageId={this.props.languageItem._id}
          buttonText='create'
          onComplete={this.props.bookCreate} />

        <ul>
          { this.props.languageItem._id in this.props.books ?
            this.props.books[this.props.languageItem._id].map(book => {
              return <BookItem 
                key={book._id}
                bookItem={book}
                onClick={this.props.bookDelete} />;
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
  books: state.books,
});

const mapDispatchToProps = (dispatch, getState) => ({
  languageUpdate: language => dispatch(languageUpdateRequest(language)),
  bookCreate: book => dispatch(bookCreateRequest(book)),
  bookDelete: book => dispatch(bookDeleteRequest(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageItem);
