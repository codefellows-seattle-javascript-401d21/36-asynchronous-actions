import React from 'react';

class Album_ImageForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.album_image ||
    {
      file_name: '',
      file_path: '',
      photographer: '',
      title: '',
      description: '',
      album: '',
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    if (!e.target.value.trim()) return;
    this.props.onComplete(this.state);
    this.setState({title: ''});
  }

  render(){
    return (
      <form className="album-image-form" onSubmit={this.handleSubmit}>
        <input name="file_name" 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.file_name} 
          placeholder="File Name" />        

        <input name="file_path"
          type="text" 
          onChange={this.handleChange} 
          value={this.state.file_path} 
          placeholder="File Path" />          

        <input name="photographer" 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.photographer} 
          placeholder="Photographer" />               

        <input name="title"
          type="text" 
          onChange={this.handleChange} 
          value={this.state.title} 
          placeholder="Title" />

        <textarea name="description"  
          type="text" 
          onChange={this.handleChange} 
          value={this.state.description} 
          placeholder="Description" ></textarea>     

        <input name="album"
          type="text" 
          onChange={this.handleChange} 
          value={this.state.album} 
          placeholder="Album" />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
    
  }
}

export default Album_ImageForm;




        
