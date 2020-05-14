import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';
import Route from './src/Route';

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Route/>
      </Provider>
    )
  }
}
export default App;