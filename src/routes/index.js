import Main from '../layouts/main/index'
import Login from '../layouts/login/index'
import Test from '../pages//test'

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