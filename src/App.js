import React from 'react';
import { HashRouter } from "react-router-dom";
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux';
import configureStore from './store/index';
import { Switch } from 'react-router-dom';
import routes from './routes/index';
import { RouteWithSubRoutes } from './util'

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            {
              routes && routes.map((route, index) => (
                <RouteWithSubRoutes key={index} {...route} />
              ))
            }
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default hot(module)(App)