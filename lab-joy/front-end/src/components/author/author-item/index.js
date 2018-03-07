import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import AuthorForm from '../author-form';
import {authorUpdateRequest, authorDeleteRequest} from '../../../actions/author-actions';

import NoteForm from '../../note/note-form';
import NoteItem from '../../note/note-item';
import {noteCreateRequest, noteFetchRequest} from '../../../actions/note-actions';

class AuthorItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.author ?
      this.props.author :
      {
        name: '',
        editing: false,
      };

    let memberFunctions = Object.getOwnPropertyNames(AuthorItem.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleEditing() {
    this.setState({
      editing: !this.state.editing,
    });
  }

  handleUpdate(author) {
    this.setState({
      editing: !this.state.editing,
    });

    this.props.authorUpdate(author);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.authorDelete(this.state);
  }

  render() {
    return (
      <div className="author-item" key={this.props.author._id} onDoubleClick={this.handleEditing}>
        <h2>{this.props.author.name}</h2>
        <button onClick={this.handleDelete}>{this.props.buttonText}</button>

        {renderIf(this.state.editing, <AuthorForm author={this.props.author} buttonText="update author" onComplete={this.handleUpdate} />)}

        <div className="note-form">
          <NoteForm authorId={this.props.author._id} buttonText="create note" onComplete={this.props.noteCreate} />

          {console.log('this.props.notes: ', this.props.notes)}
          {console.log('this.props.author._id: ', this.props.author._id)}
          {
            Array.isArray(this.props.notes) ?
              this.props.notes.map(note => {
                if (note.author === this.props.author._id) return <NoteItem key={note._id} notes={note} buttonText="delete note" />;
              })
              :
              undefined
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch, getState) => ({
  authorUpdate: author => dispatch(authorUpdateRequest(author)),
  authorDelete: author => dispatch(authorDeleteRequest(author)),
  noteCreate: note => dispatch(noteCreateRequest(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorItem);