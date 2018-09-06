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
            <img src="/assets/man.jpg" title="tphoto" alt="Tinder Photo" /> :
            <img src="/assets/women.jpg" title="tphoto" alt="Tinder Photo" />
          }

        </div>
        <div className="tinfo">
          <div>Vieta: <p>Antakalnis</p></div>
          <div>Laikas: <p>17:30</p></div>
        </div>

        <div className="tcontrols">
          <div className="tno" onClick={()=>this.handleSelection('NO')}>
            <img src="/assets/y.PNG" className="ynincon" />
          </div>

          <div className="tyes" onClick={()=>this.handleSelection('YES')}>
            <img src="/assets/y.PNG" className="ynincon" />
          </div>
        </div>
      </div>
    </React.Fragment>;
  }
}

export default DriverMatchingScreen;
