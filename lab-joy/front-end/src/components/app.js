import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import createStore from '../lib/store';

let store = createStore();

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path="/" component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;