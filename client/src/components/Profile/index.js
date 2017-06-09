import React from 'react';
import { Layout, Button } from 'antd';
import { connect } from 'react-redux';
import {
  Link,
  Redirect
} from 'react-router-dom';

import { logout } from '../../actions';
const { Content } = Layout;

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
  }

  componentWillMount() {
    if(!localStorage.getItem('token')) {
      this.setState({
        isLogin: false
      })
    }
  }

  handleLogout = () => {
    this.props.logout()
  }

  render() {
      if(this.state.isLogin) {
        return (
          <Layout>
            <Content style={{ minWidth: '130px', width: '130px', marginTop: 74, marginLeft: 50 }}>
              <Link to="/add/question"><Button type="primary" icon="plus">Add Question</Button></Link>
              <Button type="danger" onClick={this.handleLogout}><Link to="/">Log Out</Link></Button>
            </Content>
          </Layout>
        )
      } else {
        return <Redirect to={{ pathname:'/' }} />
      }

  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(null,mapDispatchToProps)(Profile);
