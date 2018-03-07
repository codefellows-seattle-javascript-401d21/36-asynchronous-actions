import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.notes ?
      this.props.notes :
      {
        title: '',
        content: '',
        important: false,
        editing: false,
        authorId: this.props.authorId,
        author: this.props.authorId,
      };

    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);

    this.setState({
      title: '',
      content: '',
      important: false,
      editing: false,
    });
  }

  render() {
    return (
      <form className="note-form" onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange} />
        <input type="text" name="content" placeholder="content" value={this.state.content} onChange={this.handleChange} />

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default NoteForm;