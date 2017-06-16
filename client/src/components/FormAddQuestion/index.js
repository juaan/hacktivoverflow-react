import React from 'react';
import { connect } from 'react-redux';
import {
  Redirect
} from 'react-router-dom';
import { Input, Layout, Button, Icon } from 'antd';

import { postQuestion } from '../../actions';
const { Content } = Layout;

class FormAddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem('username'),
      title: '',
      content: '',
      questionPosted: false,
    };
  }

  handleChange = (e) => {
    let newObj = {};
    newObj[e.target.name] = e.target.value
    this.setState(newObj);
  }

  submitQuestion = () => {
    this.setState({
      title:'',
      content:'',
      questionPosted: true
    }, () => {
      this.props.postQuestion(this.state);
    })
  }

  render() {
    if(this.state.questionPosted) {
      return <Redirect to={{ pathname:'/' }} />
    } else {
      return (
        <Layout style={{ marginTop:74 }}>
          <Content style={{ minWidth: 300, minHeight:600, width: '70%', margin: '0 auto'}}>
            <h1>Add Question</h1>
            <p>Title</p>
            <Input
              placeholder="Title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <p>Question</p>
            <Input
              name="content"
              onChange={this.handleChange}
              value={this.state.content}
              type="textarea"
              rows={4}
              placeholder="Question"
            />

            <Button
              type="primary"
              style={{ marginTop:10 }}
              onClick={this.submitQuestion}
            >
              Add
            </Button>
          </Content>
        </Layout>
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  postQuestion: (question) => dispatch(postQuestion(question)),
})

export default connect(null,mapDispatchToProps)(FormAddQuestion);
