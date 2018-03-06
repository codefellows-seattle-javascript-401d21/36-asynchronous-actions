import React from 'react';
import {Link} from 'react-router-dom';

class DashNav extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log('path', this.props.path);
    return (
      <ul className="dash-nav-list">
        <li className="dash-nav-list-item"><Link to={`${this.props.path}/generator`}>Generator</Link></li>
        <li className="dash-nav-list-item"><Link to={`${this.props.path}/oscillator`}>Oscillator</Link></li>
      </ul>
    );
  } 

}

export default DashNav;