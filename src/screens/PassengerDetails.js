import React, { Component } from 'react';
import '../css/login.css';

class PassengerDetails extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangePlace = this.onChangePlace.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.state = {
      place: null,
      time: null,
    }
  }

  onChangePlace(event) {
    this.setState({ username: event.target.value });
  }

  onChangeTime(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/waiting');
  }

  render() {
    return (
      <div className="tbg">
        <div className="tbgwrap">
          <div className="login">
            <form className="login-container" onSubmit={this.handleSubmit}>
              <p><input type="text" placeholder="Antakalnis" onChange={this.onChangePlace}/></p>
              <p><input type="text" placeholder="17:00" onChange={this.onChangeTime}/></p>
              <p><input type="submit" value="Submit"/></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PassengerDetails;
