import React from 'react';
import { Layout, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllQuestions } from '../../actions';
import Questions from './Questions';

const { Content, Sider } = Layout;

const Home = (props) => (
  <Layout>
    <Layout>
      {
        localStorage.getItem('token') ?
        <Link to="/add/question"><Button type="primary" icon="plus" style={{ minWidth: '130px', width: '130px', marginTop: 74, marginLeft: 50 }}>Add Question</Button></Link>
        :
        <Link to="/login"><Button type="primary" icon="plus" style={{ minWidth: '130px', width: '130px', marginTop: 74, marginLeft: 50 }}>Add Question</Button></Link>
      }
      {props.question}
      <Content style={{ padding: '0 50px', marginTop: 10, marginBottom : 20 , width: '80%' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>
        <Questions getAllQuestions={() => props.getAllQuestions()} questions={props.questions}/>
        </div>

      </Content>
    </Layout>
  </Layout>
)

const mapDispatchToProps = dispatch => ({
  getAllQuestions: (question) => dispatch(getAllQuestions(question))
})

const mapStateToProps = state => ({
  questions : state.questions
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
