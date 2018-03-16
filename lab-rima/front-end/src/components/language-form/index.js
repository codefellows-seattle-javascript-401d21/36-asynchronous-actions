import React from 'react';
import {renderIf} from '../../lib/utils';

class LanguageForm extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.language ||
      {
        name: '',
      };

    let memberFunctions = Object.getOwnPropertyNames(LanguageForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleChange(event){
    let {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);

    if(this.props.languages){
      this.setState(this.props.languages)
    }else{
      this.setState(
        {
          name: '',
        }
      );
    }
  }

  handleClick(event){
    event.preventDefault();

    this.props.editing.setState({editing: false});

    if(this.props.languages){
      this.setState(this.props.languages)
    }else{
      this.setState(
        {
          name: '',
        }
      );
    }
  }

  render(){
    return(
      <form
        className="language-form"
        onSubmit={this.handleSubmit}
        id="language-form">

        <input
          className="name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter a name"/>

        <button
          className="save"
          type="submit">
          {this.props.buttonText}
        </button>

        {renderIf(this.props.editing,
          <button
            className="cancel"
            type="button"
            onClick={this.handleClick}>
            cancel
          </button>
        )}
      </form>
    );
  }
}

export default LanguageForm;
