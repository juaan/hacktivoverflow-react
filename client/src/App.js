import React, { Component } from 'react';
import { Layout,Menu, Icon, Button } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';


import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import FormAddQuestion from './components/FormAddQuestion';

const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {token} = this.props.user;
    return (
      <Router>
        <div className="App">
          <Layout>
            <Header style={{ position: 'fixed' ,width: '100%', zIndex: 20 }}>
              <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
              </div>

              <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1"><Link to="/"> <h1>HacktivOverflow </h1> </Link></Menu.Item>
                <Menu.Item key="2">Questions</Menu.Item>
                {
                  localStorage.getItem('token') ?
                  <Menu.Item key="3" style={{float: 'right'}}><Link to="/profile">{localStorage.getItem('username')}</Link></Menu.Item>
                  :
                  <Menu.Item key="4" style={{float: 'right'}}><Link to="/login">Log In</Link></Menu.Item>
                }
              </Menu>
            </Header>
            <Route exact path='/' component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/add/question" component={FormAddQuestion}/>
            <Footer />
          </Layout>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(App);
