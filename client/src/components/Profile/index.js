import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class Profile extends React.Component {
  render() {
    return(
      <Layout>
        <Content style={{ marginTop:'74px' }}>
          <h1>profile</h1>
        </Content>
      </Layout>
    )
  }
}

export default Profile;
