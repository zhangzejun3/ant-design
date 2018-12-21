import React, { Component } from 'react';
import './App.css';

import { Layout, Menu, Breadcrumb, Icon, } from 'antd';

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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
            <Menu.Item key="1">
              <Icon type="home" />
              <span>首页</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="shop" /><span>商品</span></span>}
            >
              <Menu.Item key="3">商品1</Menu.Item>
              <Menu.Item key="4">商品2</Menu.Item>
              <Menu.Item key="5">商品3</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="download" /><span>订单</span></span>}
            >
              <Menu.Item key="6">订单 1</Menu.Item>
              <Menu.Item key="8">订单 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>用户</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>标题</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              内容
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;