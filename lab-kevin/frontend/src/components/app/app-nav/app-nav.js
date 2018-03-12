import React from 'react';
import {Link} from 'react-router-dom';

class AppNav extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <nav className="app-nav">
        <ul className="app-nav-list">
          <li className="app-nav-list-item">
            <Link to='/dashboard'>Home</Link>
          </li>
        </ul>
      </nav>
    );
  }

}

export default AppNav;
