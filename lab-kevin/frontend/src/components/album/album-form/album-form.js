import React from 'react';

class AlbumForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.album ||
    {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.title.trim()) return this.setState({title: ''});
    this.props.onComplete(this.state);
    this.setState({title: ''});
  }

  render(){
    return (
      <form className="album-form" onSubmit={this.handleSubmit}>
        <input name="title" onChange={this.handleChange} value={this.state.title} placeholder="Album Title" />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
    
  }
}

export default AlbumForm;
