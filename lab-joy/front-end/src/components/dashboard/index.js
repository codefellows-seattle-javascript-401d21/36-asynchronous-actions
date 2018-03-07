import React from 'react';
import {connect} from 'react-redux';
import {authorFetchRequest, authorCreateRequest} from '../../actions/author-actions';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchAuthors();
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Notes App</h1>

        {this.props.authors ?
          this.props.authors.map(author =>
            <div key={author._id}>
              {/* <span onClick={() => this.props.deleteAuthor(author)}>x</span> */}
              <p>{author.name}</p>
            </div>)
          :
          undefined
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  authors: state.authors,
});

let mapDispatchToProps = dispatch => ({
  fetchAuthors: () => dispatch(authorFetchRequest()),
  createAuthor: author => dispatch(authorCreateRequest(author)),
//   deleteAuthor: author => dispatch(authorDeleteRequest(author)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);