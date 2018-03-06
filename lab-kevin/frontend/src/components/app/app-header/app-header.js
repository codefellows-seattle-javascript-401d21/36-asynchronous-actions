import React from 'react';
import {AppNav} from '../';


class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header>
        <h1>Paradise of Fools</h1>
        <AppNav/>
      </header>
    );
  }

}

export default Header;