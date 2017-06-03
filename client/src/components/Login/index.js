import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <div>
        <h1>Login bitch</h1>
      </div>
    )
  }
}

export default Login;
