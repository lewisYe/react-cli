import React from 'react';
import { Route,Switch} from 'react-router-dom';
import Main from '../layouts/main/index'
import Home from './home';

export default class AppComponents extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={Home} />
      </Switch>
    )
  }
}