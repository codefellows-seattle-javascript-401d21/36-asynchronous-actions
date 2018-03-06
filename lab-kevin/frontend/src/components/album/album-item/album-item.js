import React from 'react';
import {Album_ImageForm} from '../../album-image';

class AlbumItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      images: this.props.images || [],
      isVisible: false,
    };
    this.openAlbumImageForm = this.openAlbumImageForm.bind(this);
  }

  handleOpenAlbumImageForm(){
    this.setState({isVisible: !this.state.isVisible});
  }

  render(){
    return (
      <li className="album-list-item">
        <button onClick={this.openAlbumImageForm}>Add New Image</button>
        <div className="album-image-wrap">
        </div>
        { isVisible ? 
          <Album_ImageForm /> : undefined}
      </li>
    );
  }

}

export default AlbumItem;