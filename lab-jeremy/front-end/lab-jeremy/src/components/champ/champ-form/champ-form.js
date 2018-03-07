import React from 'react';

class ChampForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.champ
      ? this.props.champ
      : {
        name: '',
        type: '',
        main_lane: '',
        winrate_percent: 0,
        season: this.props.season._id,
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
    this.setState({name: '', type: '', main_lane: '', winrate_percent: 0});
  }

  render() {
    return  (
      <form className="champ-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Champ name..."
          required="true"
          autoComplete="off"
          onChange={this.handleChange}/>

        <input
          type="text"
          name="type"
          value={this.state.type}
          placeholder="Champ type..."
          required="true"
          autoComplete="off"
          onChange={this.handleChange}/>

        <input
          type="text"
          name="main_lane"
          value={this.state.main_lane}
          placeholder="Champ primary lane..."
          required="true"
          autoComplete="off"
          onChange={this.handleChange}/>

        <input
          type="text"
          name="winrate_percent"
          value={this.state.winrate_percent}
          placeholder="Champ winrate percentage..."
          required="true"
          autoComplete="off"
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ChampForm;
