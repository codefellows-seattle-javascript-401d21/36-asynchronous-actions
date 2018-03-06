import React from 'react';
import { renderIf } from '../../../lib/utils';

class OwnerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.owner
      ? this.props.owner
      : {
        name: '',
        updating: false,
      };
      
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    !this.state.name ? alert('need a name') :
      this.props.onComplete(this.state);
    this.setState({
      name: '',
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

        <button className="submit_btn" type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default OwnerForm;