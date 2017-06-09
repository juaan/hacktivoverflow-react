import React from 'react';

import { Input, Layout, Button, Icon } from 'antd';

const { Content } = Layout;

class FormAddQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout style={{ marginTop:74 }}>
        <Content style={{ minWidth: 300, minHeight:600, width: '70%', margin: '0 auto'}}>
          <h1>Add Question</h1>
          <p>Title</p>
          <Input placeholder="Title" />,
          <p>Question</p>
          <Input type="textarea" rows={4} placeholder="Question" />

          <Button type="primary" style={{ marginTop:10 }}> Add </Button>
        </Content>
      </Layout>
    )
  }
}

export default FormAddQuestion;
