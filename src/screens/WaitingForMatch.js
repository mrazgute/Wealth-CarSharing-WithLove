import React, { Component } from 'react';
import loader from './../components/loader';
const FIRST_DRIVER_SHOWN = 'firstDriverShown';

class WaitingForMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drivers: null,
      firstDriverShown: null
    };
  }

  componentDidMount() {
    // this.timer = setInterval(()=> this.getStatus(), 1000);
    if(localStorage.getItem('role') === 'driver') {
      this.timer = setInterval(()=> this.getStatus(), 1000);
    }
    if(localStorage.getItem('role') === 'passenger') {
      // setTimeout(function(){ alert("Hello"); }, 3000);
      fetch(`http://localhost:5000/drivers`, {
        method: 'GET',
        // headers: {
        //   "Content-Type": "application/json; charset=utf-8",
        // }
      }).then(res => res.json())
        .then(drivers => {
        console.log('drivers: ', drivers);
          this.setState({ drivers: drivers });
        // this.props.history.push('/role-selection');
      }).catch(e => {
        console.log('error: ', e);
        // this.props.history.push('/role-selection');
      });
    }
  }

  componentWillUnmount() {
    if(localStorage.getItem('role') === 'driver') {
      clearInterval(this.timer);
      this.timer = null; // here...
    }
  }

  getStatus() {
    fetch(`http://localhost:5000/${localStorage.getItem('role')}/${localStorage.getItem('userId')}/matches`, {
      method: 'GET',
    }).then((res) => {
      console.log('matches: ', res);
      // this.props.history.push('/role-selection');
    }).catch(e => {
      console.log('error: ', e);
      this.props.history.push('/role-selection');
    });
  }

  render() {
    if(!localStorage.getItem(FIRST_DRIVER_SHOWN) && this.state.drivers) {
      localStorage.setItem(FIRST_DRIVER_SHOWN, true);
      return <div>{JSON.stringify(this.state.drivers[0].name)}</div>;
    }
    if(localStorage.getItem(FIRST_DRIVER_SHOWN) && this.state.drivers) {
      return <div>{JSON.stringify(this.state.drivers[1].name)}</div>;
    }
    return <div>LOADING YO</div>;
  }
}

WaitingForMatch.propTypes = {};
WaitingForMatch.defaultProps = {};

export default WaitingForMatch;
