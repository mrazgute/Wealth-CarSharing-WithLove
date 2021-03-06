import React, { Component } from 'react';
import getURL from '../components/getURL';

class DriverMatchingScreen extends Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection = (answer) => {
    console.log('driver answered: ', answer);
    if(answer === 'YES') {
      fetch(`${getURL()}/match/driver`, {
        method: 'GET',
      }).then(() => this.props.history.push('/match'));
    }
  };

  render() {
    return <React.Fragment>
      <div className="tbgwrap">
        <div className="tphoto">

          {localStorage.getItem('role') === 'passenger' ?
            <img src="/assets/man.jpg" title="tphoto" alt="Tinder Photo" heigth="100%" width="100%" /> :
            <img src="/assets/women.jpg" style={{width: '500px'}} title="tphoto" alt="Tinder Photo" heigth="100%" width="100%" />
          }

        </div>
        <div className="tinfo">
          <div>Vieta: <p>Antakalnis</p></div>
          <div>Laikas: <p>17:30</p></div>
        </div>

        <div className="tcontrols">
          <div className="tno" onClick={()=>this.handleSelection('NO')}>
            <img src="/assets/n.png" className="ynincon" />
          </div>

          <div className="tyes" onClick={()=>this.handleSelection('YES')}>
            <img src="/assets/y.png" className="ynincon" />
          </div>
        </div>
      </div>
    </React.Fragment>;
  }
}

export default DriverMatchingScreen;
