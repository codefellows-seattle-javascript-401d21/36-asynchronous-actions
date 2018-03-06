import React from 'react';
import {connect} from 'react-redux';
import {languageCreate, languageDelete} from '../../action/language-action';
import {languageFetchAllRequest, languageCreateRequest, languageDeleteRequest} from '../../action/language-action';
import LanguageForm from '../language-form/index';
import LanguageItem from '../language-item/index';

class Dashboard extends React.Component{
  componentWillMount(){
    this.props.fetchAllLanguages();
  }

  render(){
    return(
      <section>
        <h1>Your Book List</h1>

        <LanguageForm
          buttonText='create'
          onComplete={this.props.createLanguage} />

        <ul>
          {
            this.props.languages.map(languageItem => {
              return <LanguageItem 
                key={languageItem.id}
                languageItem={languageItem}
                onClick={this.props.deleteLanguage} />;
            })
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
  fetchAllLanguages: () => dispatch(languageFetchAllRequest()),
  createLanguage: language => dispatch(languageCreateRequest(language)),
  deleteLanguage: language => dispatch(languageDeleteRequest(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
