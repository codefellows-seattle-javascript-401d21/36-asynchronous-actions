import React from 'react';

export default class AlbumImage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      _id: this.props.image._id,
      file_name: this.props.image.file_name,
      file_path: this.props.image.file_path,
      title: this.props.image.title,
      description: this.props.image.description,
      photographer: this.props.image.photographer,
      readonly: true,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleReadOnly = this.toggleReadOnly.bind(this);
  }

  toggleReadOnly(){
    this.setState({readonly: !this.state.readonly});
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleDelete(){
    this.props.deleteImage(this.state);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state)
      .then(() => this.setState({readonly: true}));
  }
 
  render(){
    return (
      <li>
        <span onClick={this.handleDelete}>delete</span>
        <form onSubmit={this.handleSubmit}>
  
          <input type="text" 
            name="file_path" 
            onChange={this.handleChange} 
            value={this.state.file_path} 
            onDoubleClick={this.toggleReadOnly} 
            readOnly={this.state.readonly}/>

          <input type="text" 
            name="title" onChange={this.handleChange} 
            value={this.state.title} 
            onDoubleClick={this.toggleReadOnly} 
            readOnly={this.state.readonly}/>
          <input type="text" 
            name="description" 
            onChange={this.handleChange} 
            value={this.state.description} 
            onDoubleClick={this.toggleReadOnly} 
            readOnly={this.state.readonly}/>
          <input type="text" name="photographer" 
            onChange={this.handleChange} 
            value={this.state.photographer} 
            onDoubleClick={this.toggleReadOnly} 
            readOnly={this.state.readonly}/> 

          <input type="hidden" name="submit" />   

        </form>
      </li>
    );
  }
}