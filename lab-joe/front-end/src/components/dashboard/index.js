import React from 'react'
import {connect} from 'react-redux'
import {
  albumFetchRequest,
  albumCreateRequest} from '../../actions/album-actions'
import {
  trackFetchRequest,
  trackCreateRequest} from '../../actions/track-actions'

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchAlbums()
    this.props.fetchTracks()
  // this.props.albums.push({_id: '123', name: 'joe'})
  // this.props.albums.push({_id: '456', name: 'steve'})
  // this.props.albums.push({_id: '789', name: 'alex'})
console.log(this.props.albums)
console.log(this.props.tracks)

  }


  render() {
    return (
      <div className="dashboard-container">
        <h1>Hello world - music things</h1>
        <h3>albums!</h3>
         {this.props.albums ?
          this.props.albums.map(album =>
            <div key={album._id}>
              { <span onClick={() => this.props.deleteAlbum(album)}>x</span> }
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
  tracks: state.tracks
})

let mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch(albumFetchRequest()),
  createAlbum: album => dispatch(albumCreateRequest(album)),
  // deleteAlbum: album => dispatch(albumDeleteRequest(album)),
  fetchTracks: () => dispatch(trackFetchRequest()),
  createTrack: track => dispatch(trackCreateRequest(track)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)