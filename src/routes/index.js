import Main from '../layouts/main/index'
import Home from '../components/home'
import Test from '../components//test'

const routes = [
  {
    path: "/login",
    component: Home
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