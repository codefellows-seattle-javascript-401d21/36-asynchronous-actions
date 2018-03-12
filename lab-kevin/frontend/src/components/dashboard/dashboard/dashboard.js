import React from 'react';
import {Route} from 'react-router-dom';
import {DashNav} from '../';
import {AlbumForm, AlbumItem} from '../../album';
import {albumCreateRequest} from '../../../actions/album-actions';
import {connect} from 'react-redux';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className="dashboard-container">
        <h2>All the World&apos;s a Stage<span>--William Shakespeare</span></h2>
        <DashNav path={this.props.match.path} />
        <Route path={`${this.props.match.path}/generator`} render={() => {
          return (
            <section className='album-form-container'>
              <AlbumForm onComplete={this.props.album_create}
                buttonText="Generate"/>
            </section>
          );
        }} />
        <Route path={`${this.props.match.path}/oscillator`} render={()=> {
          return (
            this.props.albums ? this.props.albums.map(album => (
              <AlbumItem album={album} key={album._id} images={this.props.images[album._id]} />
            )
            ) : undefined
          );
        }} />
      </section>
    );
  }
}

const mapStateToProps = state => (
  {
    albums: state.albums,
    images: state.images,
  }
);

const mapDispatchToProps = dispatch => ({
  album_create: album => dispatch(albumCreateRequest(album)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);