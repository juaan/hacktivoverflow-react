import React, { Component } from 'react';
import { Layout,Menu } from 'antd';

import logo from './logo.svg';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ position: 'fixed', width: '100%'}}>

            <div className="logo">
              <img src={logo} className="App-logo" alt="logo" />

            </div>

            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><h1> HacktivOverflow </h1></Menu.Item>
              <Menu.Item key="2">Questions</Menu.Item>
              <Menu.Item key="3" style={{float: 'right'}}>Login</Menu.Item>
              <Menu.Item key="4" style={{float: 'right'}}>Logout</Menu.Item>
              <Menu.Item key="5" style={{float: 'right'}}>Sign up</Menu.Item>
            </Menu>
          </Header>

          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>Content</div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
