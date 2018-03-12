import React from 'react';
import {Album_ImageForm} from '../../album-image';
import {AlbumImage} from '../../album-image';
import {connect} from 'react-redux';
import {imageCreateRequest, imageDeleteRequest, imageUpdateRequest} from '../../../actions/image-actions'; 

class AlbumItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
    };
    this.toggleAlbumImageForm = this.toggleAlbumImageForm.bind(this);
    this.handleImageCreate = this.handleImageCreate.bind(this);
    this.handleDelete = this.handleDelete.bind();
  }

  handleDelete(){

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
        <button onClick={this.toggleAlbumImageForm}>Add New Image</button>
        <div className="album-image-wrap">
          <h3>{this.props.album.title}</h3>
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
});
export default connect(mapPropsToState, mapDispatchToState)(AlbumItem);