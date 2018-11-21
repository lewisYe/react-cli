//路由嵌套
import { Route } from 'react-router-dom';
import React from 'react'
export const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
