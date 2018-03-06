import React from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import {Dashboard} from '../../dashboard';
import {Header, Footer} from '../';


class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Header />
        <main>
          <Route exact path='/' component={Dashboard} />
          <Route path='/dashboard' component={Dashboard} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
