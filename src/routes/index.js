import { lazy } from 'react';
const Main = lazy(() => import('../layouts/main/index'));
const Login = lazy(() => import('../layouts/login/index'));
const Template = lazy(() => import('~views/template/index'));

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
        path: "/template",
        component: Template
      }
    ]
  }
];

export default routes;