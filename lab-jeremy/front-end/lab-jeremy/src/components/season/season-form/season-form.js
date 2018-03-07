import React from 'react';

class SeasonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.season
      ? this.props.season
      : {
        name: '',
        editing: false,
        completed: false,
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({name: ''});
  }

  render() {
    return  (
      <form className="season-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Season name..."
          required="true"
          autoComplete="off"
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default SeasonForm;
