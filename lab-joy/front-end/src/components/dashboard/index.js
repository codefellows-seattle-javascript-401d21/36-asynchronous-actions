import React from 'react';
import {connect} from 'react-redux';
import {authorFetchRequest, authorCreateRequest} from '../../actions/author-actions';
import AuthorForm from '../author/author-form';
import AuthorItem from '../author/author-item';
import {noteFetchRequest} from '../../actions/note-actions';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchAuthors();
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>Notes App</h1>

        <AuthorForm buttonText="create author" onComplete={this.props.createAuthor} />
        {this.props.authors ?
          this.props.authors.map(author => <AuthorItem key={author._id} author={author} buttonText="delete author" />)
          :
          undefined
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authors: state.authors,
  notes: state.notes,
});

const mapDispatchToProps = dispatch => ({
  createAuthor: author => dispatch(authorCreateRequest(author)),
  fetchAuthors: () => dispatch(authorFetchRequest()),
  fetchNotes: () => dispatch(noteFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);