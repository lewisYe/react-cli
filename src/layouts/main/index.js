import React, { Suspense } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import RouteWithSubRoutes from '~utils/routeWithSubRoutes'
import { Link } from 'react-router-dom'
import style from './index.less';


export default class Main extends React.Component {
  componentDidMount() {

  }
  render() {
    const { routes, location } = this.props

    return (
      <div className={style.container}>
        <div className={style.title}>welcome to react-cli</div>
        <Link to="/template">子页面</Link>
        <div className={style.children}>
          <Suspense fallback={<div>loading</div>}>
            {
              routes && routes.map((route, index) => (
                <RouteWithSubRoutes key={index} {...route} />
              ))
            }
          </Suspense>
        </div>
      </div>
    )
  }
}