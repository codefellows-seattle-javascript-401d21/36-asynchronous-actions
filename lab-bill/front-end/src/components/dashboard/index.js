import React from 'react';
import {connect} from 'react-redux';
import {
  albumFetchRequest,
  albumCreateRequest,
  albumDeleteRequest,
  albumUpdateRequest} from '../../actions/album-actions';
import {trackFetchRequest} from '../../actions/track-actions';
import { trackCreateRequest } from '../../actions/track-actions';
import AlbumForm from '../album-create/album-create';
import TrackForm from '../track-create/track-create';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchAlbums();
    this.props.fetchTracks();
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
              <AlbumForm album={album} buttonText="update" update={this.props.updateAlbum}/>
              <TrackForm album={album} buttonText="New Track" createTrack={this.props.createTrack}/>
              {this.props.tracks[album._id] ? 
                this.props.tracks[album._id].map(track => 
                  <p key={track._id} >{track.title}</p> )
                : undefined
              }
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
  tracks: state.tracks,
});

let mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(albumFetchRequest()),
  fetchTracks: () => dispatch(trackFetchRequest()),
  createAlbum: album => dispatch(albumCreateRequest(album)),
  deleteAlbum: album => dispatch(albumDeleteRequest(album)),
  updateAlbum: album => dispatch(albumUpdateRequest(album)),
  createTrack: track => dispatch(trackCreateRequest(track)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
