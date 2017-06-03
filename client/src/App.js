import React, { Component } from 'react';
import { Layout,Menu, Icon } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Header style={{ position: 'fixed' ,width: '100%'}}>

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
                <Menu.Item key="3" style={{float: 'right'}}><Link to="/login">Login</Link></Menu.Item>
                <Menu.Item key="4" style={{float: 'right'}}>Logout</Menu.Item>
                <Menu.Item key="5" style={{float: 'right'}}>Sign up</Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Layout>
                <Content style={{ padding: '0 50px', marginTop: 74, width: '80%' }}>
                  <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>Content</div>
                </Content>
              </Layout>
              <Sider width={300} style={{ background: 'ghostwhite', right: 0 , marginTop: 74, minHeight: 300, position: 'fixed' }}>
                <h3> it is SIDER </h3>
              </Sider>
            </Layout>
            <Footer />
          </Layout>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
