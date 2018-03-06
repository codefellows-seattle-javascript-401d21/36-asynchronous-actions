import React from 'react';
import {Album_ImageForm} from '../../album-image';
import {connect} from 'react-redux';
import {imageCreateRequest} from '../../../actions/image-actions'; 

class AlbumItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
    };
    this.toggleAlbumImageForm = this.toggleAlbumImageForm.bind(this);
    this.handleImageCreate = this.handleImageCreate.bind(this);
  }

  toggleAlbumImageForm(){
    this.setState({isVisible: !this.state.isVisible});
  }

  handleImageCreate(image){
    this.props.imageCreateRequest({...image, album: this.props.album._id});
  }

  render(){
    return (
      <li className="album-list-item">
        <button onClick={this.toggleAlbumImageForm}>Add New Image</button>
        <div className="album-image-wrap">
          <h3>{this.props.album.title}</h3>
          {this.props.images.length ?  this.props.images.map(image => (
            <p key={image._id}>{image.file_name}</p>
          )
          ) : undefined}
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
});
export default connect(mapPropsToState, mapDispatchToState)(AlbumItem);