import React from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import {Dashboard} from '../../dashboard';
import {Header, Footer} from '../';
import store from '../../../lib/store';


class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Header />
        <Provider store={store}>
          <main>
            <Route exact path='/' component={Dashboard} />
            <Route path='/dashboard' component={Dashboard} />
          </main>
        </Provider>
        <Footer />
      </div>
    );
  }
}

export default App;
