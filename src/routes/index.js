import { lazy } from 'react';
const Main = lazy(() => import('../layouts/main/index'));
const Login = lazy(() => import('../layouts/login/index'));
const Test = lazy(() => import('../pages/test'));

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Main,
    routes: [
      {
        path: "/test",
        component: Test
      }
    ]
  }
];

export default routes;