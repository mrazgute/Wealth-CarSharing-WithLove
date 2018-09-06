import React, { Component } from 'react';
import '../css/login.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/login', {
      method: 'POST',
      body: data,
    }).then(() => {
      this.props.history.push('/role-selection');
    }).catch(e => {
      console.log('error: ', e);
    });
  }

  render() {
    return (
      <div className="tbg">
        <div className="tbgwrap">
          <div className="login">
            <form className="login-container" onSubmit={this.handleSubmit}>
              <p><input type="text" placeholder="Name"/></p>
              <p><input type="password" placeholder="Password"/></p>
              <p><input type="submit" value="Log in"/></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
