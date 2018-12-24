import React, { Component } from 'react';
import Home from './components/Home'
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const Goods = () => <h2>Goods</h2>;
const Order = () => <h2>Order</h2>;
const Users = () => <h2>Users</h2>;

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Link to='/'>
                  <Icon type="pie-chart" />
                  <span>首页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to='/goods'>
                  <Icon type="shop" />
                  <span>商品</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to='/order'>
                  <Icon type="download" />
                  <span>订单</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to='/users'>
                  <Icon type="user" />
                  <span>用户</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            {/* <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
            </div>
            </Content> */}
            <Route path="/" exact component={Home} />
            <Route path="/goods" component={Goods} />
            <Route path="/order" component={Order} />
            <Route path="/users" component={Users} />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;