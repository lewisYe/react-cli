import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import logoImage from '../../static/logo.png';
import { RouteWithSubRoutes } from '../../util';
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
        <Link to="/test">子页面</Link>
        <div className={style.children}>
          {
            routes && routes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))
          }
        </div>
      </div>
    )
  }
}