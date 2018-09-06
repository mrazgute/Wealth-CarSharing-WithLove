import React, { Component } from 'react';
import '../css/login.css';
import getURL from './../components/getURL';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: null,
      password: null,
    }
  }

  onChangeName(event) {
    this.setState({ username: event.target.value });
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`${getURL()}/login`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    }).then(response => response.json())
      .then(data => {
      localStorage.setItem('userId', data.id);
      this.props.history.push('/role-selection');
    }).catch(e => {
      console.log('error: ', e);
      this.props.history.push('/role-selection');
    });
  }

  render() {
    return (
      <div className="tbg">
        <div className="tbgwrap">
          <div className="login">
            <form className="login-container" onSubmit={this.handleSubmit}>
              <p><input type="text" placeholder="Name" onChange={this.onChangeName}/></p>
              <p><input type="password" placeholder="Password" onChange={this.onChangePassword}/></p>
              <p><input type="submit" value="Log in"/></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
