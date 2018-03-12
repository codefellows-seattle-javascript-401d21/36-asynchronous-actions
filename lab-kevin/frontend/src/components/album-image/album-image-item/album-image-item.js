import React from 'react';

export default class AlbumImage extends React.Component{
  constructor(props){
    super(props);
    this.state = {...this.props.image, readonly: true};

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
    e.target.blur();
    this.props.onComplete(this.state)
      .then(() => this.setState({readonly: true}));
  }
 
  render(){
    return (
      <li>
        <span onClick={this.handleDelete}>delete image</span>
        <form name="album-image-form" onSubmit={this.handleSubmit}>
          <label htmlFor="file_path">Path</label>
          <input type="text" 
            name="file_path" 
            onChange={this.handleChange} 
            value={this.state.file_path}
            onBlur={this.toggleReadOnly} 
            onDoubleClick={this.toggleReadOnly} 
            readOnly={this.state.readonly}/>

          <label htmlFor="title">Title</label>
          <input type="text" 
            name="title" onChange={this.handleChange} 
            value={this.state.title} 
            onBlur={this.toggleReadOnly} 
            onDoubleClick={this.toggleReadOnly} 
            readOnly={this.state.readonly}/>

          <label htmlFor="description">Description</label>
          <input type="text" 
            name="description" 
            onChange={this.handleChange} 
            value={this.state.description} 
            onBlur={this.toggleReadOnly} 
            onDoubleClick={this.toggleReadOnly} 
            readOnly={this.state.readonly}/>

          <label htmlFor="photographer">Photographer</label>
          <input type="text" name="photographer" 
            onChange={this.handleChange} 
            onBlur={this.toggleReadOnly} 
            value={this.state.photographer} 
            onDoubleClick={this.toggleReadOnly} 
            readOnly={this.state.readonly}/> 

          <input type="submit" name="submit" value="=submit"/>   

        </form>
      </li>
    );
  }
}