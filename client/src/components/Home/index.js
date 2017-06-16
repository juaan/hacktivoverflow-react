import React from 'react';
import { Layout, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Content, Sider } = Layout;

const Home = () => (
  <Layout>
    <Layout>
      {
        localStorage.getItem('token') ?
        <Link to="/add/question"><Button type="primary" icon="plus" style={{ minWidth: '130px', width: '130px', marginTop: 74, marginLeft: 50 }}>Add Question</Button></Link>
        :
        <Link to="/login"><Button type="primary" icon="plus" style={{ minWidth: '130px', width: '130px', marginTop: 74, marginLeft: 50 }}>Add Question</Button></Link>
      }

      <Content style={{ padding: '0 50px', marginTop: 10, width: '80%' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>Content</div>
      </Content>
    </Layout>
  </Layout>
)

export default Home;
