import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/login.css';

class Signup extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" />

        <label htmlFor="password">Enter your password</label>
        <input id="password" name="password" type="password" />

        <button>Log in</button>
      </form>
    );
  }
}

Signup.propTypes = {};
Signup.defaultProps = {};

export default Signup;
