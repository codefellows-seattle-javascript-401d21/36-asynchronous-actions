import React from 'react';
import {Route} from 'react-router-dom';
import {DashNav} from '../';
import {AlbumForm} from '../../album';

class Dashboard extends React.Component{
  render(){
    console.log('match path',this.props.match.path)
    return (
      <section className="dashboard-container">
        <h2>All the World&apos;s a Stage<span>--William Shakespeare</span></h2>
        <DashNav path={this.props.match.path} />
        <Route path={`${this.props.match.path}/generator`} render={() => {
          return (
            <section className='album-form-container'>
              <AlbumForm onComplete={album => console.log(album)}
                buttonText="Generate"/>
            </section>
          );
        }} />
        <Route path={`${this.props.match.path}/oscillator`} render={()=> {
          return (
            <span>
            show albums
            </span>
          );
        }} />
      </section>
    );
  }
}

export default Dashboard;