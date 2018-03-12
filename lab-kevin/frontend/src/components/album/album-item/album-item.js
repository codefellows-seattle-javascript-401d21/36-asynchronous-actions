import React from 'react';
import {Album_ImageForm} from '../../album-image';
import {AlbumImage} from '../../album-image';
import {connect} from 'react-redux';
import {albumDeleteRequest, albumUpdateRequest} from '../../../actions/album-actions';
import {imageCreateRequest, imageDeleteRequest, imageUpdateRequest} from '../../../actions/image-actions'; 

class AlbumItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      readonly: true,
      title: this.props.album.title,
    };
    this.toggleAlbumImageForm = this.toggleAlbumImageForm.bind(this);
    this.handleImageCreate = this.handleImageCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleReadonly = this.toggleReadonly.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e){
    e.preventDefault();
    e.target.firstElementChild.blur();
    let album = this.props.album;
    album.title = this.state.title;
    this.props.albumUpdateRequest(album);
  }

  handleDelete(){
    this.props.albumDeleteRequest(this.props.album);
  }

  toggleReadonly(){
    this.setState({readonly: !this.state.readonly});
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  toggleAlbumImageForm(){
    this.setState({isVisible: !this.state.isVisible});
  }

  handleImageCreate(image){
    this.props.imageCreateRequest({...image, album: this.props.album._id});
    this.toggleAlbumImageForm();
  }

  render(){
    return (
      <li className="album-list-item">
        <div className="album-image-wrap">
          <h3>
            <form className="albumUpdateForm" onSubmit={this.handleUpdate}>
              <input name="title"
                onBlur={this.toggleReadonly}
                onDoubleClick={this.toggleReadonly}
                onChange={this.handleChange}
                value={this.state.title} 
                readOnly={this.state.readonly}/>
              <input type="hidden" name="submit" />
            </form>
          </h3>
          <button onClick={this.handleDelete}>Delete Album</button>
          <button onClick={this.toggleAlbumImageForm}>Add New Image</button>
          <ul>
            {this.props.images[this.props.album._id].length ?  this.props.images[this.props.album._id].map(image => (
              <AlbumImage 
                key={image._id}
                image={image}
                onComplete={this.props.imageUpdateRequest} 
                deleteImage={this.props.imageDeleteRequest}/>
            )
            ) : undefined}
          </ul>
        </div>
        { this.state.isVisible ? 
          <Album_ImageForm onComplete={this.handleImageCreate}
            buttonText="Oscillate"/> : undefined}
      </li>
    );
  }

}

const mapPropsToState = state => ({
  albums: state.albums,
  images: state.images,
});

const mapDispatchToState = dispatch => ({
  imageCreateRequest: image => dispatch(imageCreateRequest(image)),
  imageDeleteRequest: image => dispatch(imageDeleteRequest(image)),
  imageUpdateRequest: image => dispatch(imageUpdateRequest(image)),
  albumDeleteRequest: album => dispatch(albumDeleteRequest(album)),
  albumUpdateRequest: album => dispatch(albumUpdateRequest(album)),
});
export default connect(mapPropsToState, mapDispatchToState)(AlbumItem);