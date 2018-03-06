import React from 'react';
import { renderIf } from '../../../lib/utils';

class CatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cats ?
      this.props.cats :
      {
        name: '',
        age: 0,
        color: '',
        ownerId: this.props.ownerId,
        editing: false,
      },

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({
      name: '',
      color: 0,
      age: 0,
      ownerId :this.props.ownerId,
    });
  }

  render() {
    return  (
      
      <form className="input-area" onSubmit={this.handleSubmit}>
        <input className="input"
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}/>

        <input className="input"
          type="number"
          name="age"
          placeholder="age"
          value={this.state.age}
          onChange={this.handleChange}/>

        <input className="input"
          type="text"
          name="color"
          placeholder="color"
          value={this.state.color}
          onChange={this.handleChange}/>
          

        <button className="submit_btn" type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CatForm;