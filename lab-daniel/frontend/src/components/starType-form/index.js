import React from 'react';
import {renderIf} from '../../lib/utils';

class StarTypeForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.starType? this.props.starType : {
      name: '',
    };

    Object.getOwnPropertyNames(StarTypeForm.prototype).filter(prop => prop.startsWith('handle')).map(name => this[name] = this[name].bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: '' });
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
      <form className='starType-form' onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          name='name'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='Insert Title Here'/>
        <button type='submit'>{this.props.buttonText}</button>
        {renderIf(this.props.starType, <button onClick={this.handleCancel}>Cancel</button>)}
      </form>
    );
  }
}

export default StarTypeForm;