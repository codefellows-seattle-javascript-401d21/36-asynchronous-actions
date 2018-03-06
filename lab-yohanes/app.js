import React from 'react';
import {Provider} from 'react-redux';
import data from '../data';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Your Music Choice</h1>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path="/" component={Dashboard} />
            </section>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;