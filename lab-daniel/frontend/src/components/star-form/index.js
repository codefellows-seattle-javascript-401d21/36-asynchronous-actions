import React from 'react';
import {renderIf} from '../../lib/utils';

class StarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.star? this.props.star 
      : {
        starType: this.props.starType,
        starName: '',
        cost: 0,
      };
    Object.getOwnPropertyNames(StarForm.prototype).filter(prop => prop.startsWith('handle')).map(name => this[name] = this[name].bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({starName: '', cost: 0});
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.onCancel();
  }

  render() {
    return (
      <form className='star-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='starName'
          value={this.state.starName}
          placeholder='Star Name'
          onChange={this.handleChange}/>
        <button type='submit'>{this.props.buttonText}</button>
        {renderIf(this.props.star, <button onClick={this.handleCancel}>Cancel</button>)}
      </form>
    );
  }
}

export default StarForm;