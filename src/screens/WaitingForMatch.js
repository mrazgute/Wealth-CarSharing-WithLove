import React, { Component } from 'react';
import loader from './../components/loader';
import getUrl from './../components/getURL';

class WaitingForMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drivers: null
    };
  }

  componentDidMount() {
    if(localStorage.getItem('role') === 'driver') {
      this.timer = setInterval(()=> this.getStatus(), 1000);
    }
    if(localStorage.getItem('role') === 'passenger') {
      // TODO: if passenger said yes, they should be polling
      if(localStorage.getItem('passengerYes')) {
        this.passengerTimer = setInterval(()=> this.getPassengerStatus(), 1000);
        return;
      }
      const drivers = JSON.parse(localStorage.getItem('drivers'));
      if (!drivers || !drivers.length ) {
        fetch(`${getUrl()}/drivers`, {
          method: 'GET',
        }).then(res => res.json())
          .then(drivers => {
            localStorage.setItem('drivers', JSON.stringify(drivers));
            this.props.history.push(`/matching-screen/0`);
          }).catch(e => {
          console.log('error: ', e);
        });
      } else {
        this.elseTimeout = setTimeout(() => {
          this.props.history.push('/matching-screen/0');
        }, 10000);
      }
    }
  }

  componentWillUnmount() {
    if(localStorage.getItem('role') === 'driver') {
      clearInterval(this.timer);
      this.timer = null;
    }
    if(localStorage.getItem('role') === 'passenger') {
      clearInterval(this.passengerTimer);
      this.passengerTimer = null;
      clearTimeout(this.elseTimeout);
      this.elseTimeout = null;
    }
  }

  getStatus() {
    // fetch(`http://localhost:5000/${localStorage.getItem('role')}/${localStorage.getItem('userId')}/matches`, {
    // fetch(`${getUrl()}/${localStorage.getItem('role')}/1/matches`, {
    fetch(`${getUrl()}/match/status`, {
      method: 'GET',
    }).then(res => res.json())
      .then(data => {
      if(data.PASSENGER_SAID_YES) {
        this.props.history.push('/driver-matching-screen');
      }
    }).catch(e => {
      console.log('error: ', e);
    });
  }

  getPassengerStatus() {
    // fetch(`http://localhost:5000/match/status`, {
    fetch(`${getUrl()}/match/status`, {
      method: 'GET',
    }).then(res => res.json())
      .then(data => {
        if(data.DRIVER_SAID_YES) {
          clearInterval(this.passengerTimer);
          this.passengerTimer = null;
          this.props.history.push('/match');
        }
      }).catch(e => {
      console.log('error: ', e);
      this.props.history.push('/role-selection');
    });
  }

  render() {
    return (<div className="tbg"><div className="tbgwrap" >{loader()}</div></div>);
  }
}

WaitingForMatch.propTypes = {};
WaitingForMatch.defaultProps = {};

export default WaitingForMatch;
