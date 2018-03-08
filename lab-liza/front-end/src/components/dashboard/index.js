import React from 'react';
import {connect} from 'react-redux';
import {
  albumFetchRequest,
  albumCreateRequest,
  albumDeleteRequest,
  albumUpdateRequest} from '../../actions/album-actions';
import AlbumForm from '../album-form/index';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchAlbums();
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>Hello world - music things</h1>
        <AlbumForm buttonText="Create" create={this.props.createAlbum}/>
        {this.props.albums ?
          this.props.albums.map(album =>
            <div key={album._id}>
              {<span onClick={() => this.props.deleteAlbum(album)}>x</span>}
              <p>{album.name}</p>
              <AlbumForm album={album} buttonText="Update" update={this.props.updateAlbum}/>
            </div>)
          :
          undefined
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  albums: state.albums,
});

let mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(albumFetchRequest()),
  createAlbum: album => dispatch(albumCreateRequest(album)),
  deleteAlbum: album => dispatch(albumDeleteRequest(album)),
  updateAlbum: album => dispatch(albumUpdateRequest(album)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
