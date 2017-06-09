import React from 'react';
import { Layout } from 'antd';

const { Content, Sider } = Layout;

const Home = () => (
  <Layout>
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 10, width: '80%' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>Content</div>
      </Content>
    </Layout>
  </Layout>
)

export default Home;
