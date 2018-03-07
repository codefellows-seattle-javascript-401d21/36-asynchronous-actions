import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import NoteForm from '../note-form';
import {noteUpdateRequest, noteDeleteRequest} from '../../../actions/note-actions';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: this.props.notes ?
        this.props.notes :
        {
          title: '',
          content: '',
          authorId: this.props.authorId,
          author: this.props.authorId,
        },
      editing: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(NoteItem.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleEditing() {
    this.setState({ editing: !this.state.editing });
  }

  handleUpdate(note) {
    this.setState({
      editing: !this.state.editing,
    });

    this.props.noteUpdate(note);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.noteDelete(this.props.notes);
  }

  render() {
    return (
      <div className="note-item" key={this.props.notes._id} onDoubleClick={this.handleEditing}>
        <h2>Title: {this.props.notes.title}</h2>
        <p>Content: {this.props.notes.content}</p>
        <button onClick={this.handleDelete}>{this.props.buttonText}</button>

        {renderIf(this.state.editing, <NoteForm notes={this.props.notes} buttonText="update note" onComplete={this.handleUpdate} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authors: state.notes,
});

const mapDispatchToProps = (dispatch, getState) => ({
  noteUpdate: note => dispatch(noteUpdateRequest(note)),
  noteDelete: note => dispatch(noteDeleteRequest(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);