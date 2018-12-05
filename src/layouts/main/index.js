import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import logoImage from '../../static/logo.png';
import { RouteWithSubRoutes } from '../../util';
import './index.scss';


const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class Main extends React.Component {
  render() {
    const { routes, location } = this.props
    return (
      <Layout style={{ height: '100%' }}>
        <Header className="layout-header">
          <div className="layout-logo">
            <img src={logoImage} />
          </div>
          <div className="layout-title">
            {/* lewisye */}
          </div>
        </Header>
        <Layout>
          <Sider>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {
                routes && routes.map((route, index) => (
                  <RouteWithSubRoutes key={index} {...route} />
                ))
              }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}