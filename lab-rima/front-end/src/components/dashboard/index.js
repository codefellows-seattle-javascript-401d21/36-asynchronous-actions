import React from 'react';
import {connect} from 'react-redux';
import {languageCreate, languageDelete} from '../../action/language-action';
import LanguageForm from '../language-form/index';
import LanguageItem from '../language-item/index';


class Dashboard extends React.Component{

  render(){
    return(
      <section>
        <h1>Your Book List</h1>

        <LanguageForm
          buttonText='create'
          onComplete={this.props.dashboardLanguageCreate} />

        <ul>
          {
            this.props.languages.map(languageItem => {
              return <LanguageItem 
                key={languageItem.id}
                languageItem={languageItem}
                onClick={this.props.dashboardLanguageDelete} />;
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
  dashboardLanguageCreate: language => dispatch(languageCreate(language)),
  dashboardLanguageDelete: language => dispatch(languageDelete(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
