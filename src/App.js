import React from 'react';
import { HashRouter } from "react-router-dom";
import { hot } from 'react-hot-loader'
import AppRoute from './components/AppRoute';

class App extends React.Component{
  render(){
    return(
      <HashRouter>
        <AppRoute/>
      </HashRouter>
    )
  }
}

export default hot(module)(App)