import React, { Component } from 'react';
import loader from './../components/loader';


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
      if (!JSON.parse(localStorage.getItem('drivers'))) {
        fetch(`http://localhost:5000/drivers`, {
          method: 'GET',
        }).then(res => res.json())
          .then(drivers => {
            localStorage.setItem('drivers', JSON.stringify(drivers));
            this.props.history.push(`/matching-screen/0`);
          }).catch(e => {
          console.log('error: ', e);
        });
      } else {
        setTimeout(() => {
          this.props.history.push('/matching-screen/0');
        }, 3000);
      }
    }
  }

  componentWillUnmount() {
    if(localStorage.getItem('role') === 'driver') {
      clearInterval(this.timer);
      this.timer = null; // here...
    }
  }

  getStatus() {
    // fetch(`http://localhost:5000/${localStorage.getItem('role')}/${localStorage.getItem('userId')}/matches`, {
    fetch(`http://localhost:5000/${localStorage.getItem('role')}/1/matches`, {
      method: 'GET',
    }).then(res => res.json())
      .then(matches => {
      console.log('matches: ', matches);
      // localStorage.setItem('matches', JSON.stringify([{ id: 1, name: 'PASSENGER' }]));
      localStorage.setItem('matches', JSON.stringify(matches));
      console.warn('faking SUCESS scenario: ');
        clearInterval(this.timer);
        this.timer = null;
      return setTimeout(() => {
        this.props.history.push('/driver-matching-screen');
      }, 3000);
    }).catch(e => {
      console.log('error: ', e);
      this.props.history.push('/role-selection');
    });
  }

  render() {
    return <div>LOADING YO</div>;
  }
}

WaitingForMatch.propTypes = {};
WaitingForMatch.defaultProps = {};

export default WaitingForMatch;
