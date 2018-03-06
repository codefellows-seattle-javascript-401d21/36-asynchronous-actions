import React from 'react';
import {connect} from 'react-redux';
import {
  albumFetchRequest,
  albumCreateRequest } from '../../actions/album-actions';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchAlbums();
  }

  render() {
    return(
      <div className="dashboard-container">
      <h1>Hello World</h1>
        {this.props.album ?
          this.props.albums.map(album => 
          <div key={album._id}>
          <p>{album.name}</p>
        </div>)
        :
        undefined
        }
      </div>

    )
  }
}
let mapStateToProps = state => ({
  albums: state.albums,
});

let mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(albumFetchRequest()),
  createAlbum: () => dispatch(albumCreateRequest(album)),
});

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);