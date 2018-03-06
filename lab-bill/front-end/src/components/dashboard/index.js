import React from 'react';
import {connect} from 'react-redux';
import {
  albumFetchRequest,
  albumCreateRequest,
  albumDeleteRequest} from '../../actions/album-actions';
import AlbumForm from '../album-create/album-create';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchAlbums();
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>Bill's music</h1>
        <AlbumForm buttonText="create" create={this.props.createAlbum}/>
        {this.props.albums ?
          this.props.albums.map(album =>
            <div key={album._id}>
              <span onClick={() => this.props.deleteAlbum(album)}>x</span>
              <p>{album.name}</p>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
