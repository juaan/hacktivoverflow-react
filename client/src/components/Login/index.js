import React from 'react';
import { Layout,Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
const { Content } = Layout;

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  handleChange = (e) => {
    let newObj = {}
    newObj[e.target.name] = e.target.value;
    this.setState(newObj);
  }

  submitFormLogin = () => {
    console.log(this.state);
  }

  render() {
    return (
      <Layout>
        <Layout>
          <Content style={{ padding: '0 50px', marginTop: 74, width: '100%', minHeight: '600px' }}>
            <h2 style={{ marginBottom: 40 }}>Hacktiv Overflow is part of the Stack Exchange network of 166 Q&A communities.</h2>
            <div style={styles.formLogin}>
              <Form className="login-form">
                <FormItem>
                  <Input
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                    placeholder="Username"
                  />
                </FormItem>
                <FormItem>
                  <Input
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                    type="password"
                    placeholder="Password"
                  />
                </FormItem>
                <FormItem>
                  <Button
                    style={{width: '100%'}}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={this.submitFormLogin}
                  >
                    Log in
                  </Button>
                  or <a href=""> register here ! </a>
                </FormItem>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const styles = {
  formLogin: {
    width: '30%',
    padding: '20px 20px 10px 20px',
    margin: 'auto',
    border: '1px solid ghostwhite',
    minWidth: '300px'

  }
}
export default Login;
