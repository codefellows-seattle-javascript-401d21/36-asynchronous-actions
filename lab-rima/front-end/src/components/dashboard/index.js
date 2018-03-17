import React from 'react';
import {connect} from 'react-redux';
import {languageFetchRequest, languageDeleteRequest, languageCreateRequest} from '../../action/language-action';
import {bookFetchRequest} from '../../action/book-action';
import LanguageForm from '../language-form';
import LanguageItem from '../language-item';

class Dashboard extends React.Component{
  componentWillMount(){
    console.log('__DASHBOARD__: component will mount');
    this.props.languagesGet();
    this.props.booksGet();
  }

  render(){
    return(
      <section>
        <h1>Book List</h1>

        <LanguageForm
          buttonText='create'
          onComplete={this.props.languageCreate} />

        <ul>
          { this.props.languages ?
            this.props.languages.map(languageItem => {
              return <LanguageItem 
                key={languageItem._id}
                languageItem={languageItem}
                books={languageItem.books}
                onClick={this.props.languageDelete} />;
            })
            :
            undefined
          }
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  languages: state.languages,
  books: state.books,
});

const mapDispatchToProps = (dispatch, getState) => ({
  languagesGet: () => dispatch(languageFetchRequest()),
  booksGet: () => dispatch(bookFetchRequest()),
  languageCreate: language => dispatch(languageCreateRequest(language)),
  languageDelete: language => dispatch(languageDeleteRequest(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
