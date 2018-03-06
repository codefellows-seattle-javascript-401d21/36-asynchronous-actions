import React from 'react';
import {connect} from 'react-redux';
import {languageUpdate} from '../../action/language-action';
import {bookCreate, bookDelete} from '../../action/book-action';
import {languageUpdateRequest} from '../../action/language-action';
import {
  bookCreateRequest,
  bookDeleteRequest} from '../../action/book-action';
import LanguageForm from '../language-form/index';
import BookForm from '../book-form/index';
import BookItem from '../book-item/index';
import {renderIf} from '../../lib/utils';

class LanguageItem extends React.Component{
  constructor(props){
    super(props);
console.log(this.props.books);

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

        <BookForm
          languageId={this.props.languageItem.id}
          buttonText='create'
          onComplete={this.props.bookCreate} />

        <ul>
          {
            this.props.languageItem.books.map(bookItem => {
              return <BookItem
                key={bookItem.id}
                bookItem={bookItem}
                onClick={this.props.bookDelete} />;
            })
          }
        </ul>
      </section>
    </li>;
  }
}

const mapStateToProps = state => ({
  languages: state.languages,
  books: state.books,
});

const mapDispatchToProps = (dispatch, getState) => ({
  languageUpdate: language => dispatch(languageUpdateRequest(language)),
  bookCreate: book => dispatch(bookCreateRequest(book)),
  bookDelete: book => dispatch(bookDeleteRequest(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageItem);
