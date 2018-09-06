import React, { Component } from 'react';

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
    fetch(`http://localhost:5000/${localStorage.getItem('role')}/${localStorage.getItem('userId')}/matches`, {
      method: 'GET',
    }).then((res) => {
      console.log('matches: ', res);
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
