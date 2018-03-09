import React from 'react';

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.author ?
      this.props.author :
      {
        name: '',
        editing: false,
      };

    let memberFunctions = Object.getOwnPropertyNames(AuthorForm.prototype);
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
      name: '',
      editing: false,
    });
  }

  render() {
    return (
      <form className="author-form" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default AuthorForm;