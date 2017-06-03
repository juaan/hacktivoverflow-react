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
import Home from './components/Home';

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
                <Menu.Item key="1"><Link to="/"> <h1>HacktivOverflow </h1> </Link></Menu.Item>
                <Menu.Item key="2">Questions</Menu.Item>
                <Menu.Item key="3" style={{float: 'right'}}><Link to="/login">Login</Link></Menu.Item>
                <Menu.Item key="4" style={{float: 'right'}}>Logout</Menu.Item>
                <Menu.Item key="5" style={{float: 'right'}}>Sign up</Menu.Item>
              </Menu>
            </Header>
            <Route exact path='/' component={Home}/>
            <Route path="/login" component={Login}/>
            <Footer />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
