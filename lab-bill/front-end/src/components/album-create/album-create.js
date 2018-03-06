import React from 'react';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.album
      ? this.props.album
      : {
        name: '',
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.buttonText === 'create') this.props.create(this.state);
    if (this.props.buttonText === 'update') this.props.update(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return  (
      <form className="album-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default AlbumForm;