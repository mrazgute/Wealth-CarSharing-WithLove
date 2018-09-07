import React, { Component } from 'react';
import getURL from '../components/getURL';

class MatchingScreen extends Component {
    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection = (answer) => {
        if(answer === 'NO') {
          const drivers = JSON.parse(localStorage.getItem('drivers'));
          drivers.shift();
          localStorage.setItem('drivers', JSON.stringify(drivers));
          this.props.history.push('/waiting');
        } else {
            // TODO: say yes to database
          fetch(`${getURL()}/match/passenger/`, {
            method: 'GET',
          }).then(() => {
              localStorage.setItem('passengerYes', true);
              return this.props.history.push('/waiting');
            }).catch(e => {
            console.log('error: ', e);
          });
        }
    };

    render() {
        const drivers = JSON.parse(localStorage.getItem('drivers'));
        console.log('drivers', drivers);
        const driverPic = JSON.parse(localStorage.getItem('drivers'))[0].id === 1 ?
        <img src="/assets/winner-man.jpeg" style={{width: '500px'}} title="tphoto" alt="Tinder Photo" /> :
        <img src="/assets/man.jpg" style={{width: '500px'}} title="tphoto" alt="Tinder Photo" />
        if (drivers.length) {
        return <React.Fragment>
            <div className="tbgwrap">
                <div className="tphoto">
                  {localStorage.getItem('role') === 'passenger' ?
                    driverPic :
                    <img src="/assets/women.jpg" style={{width: '500px'}} title="tphoto" alt="Tinder Photo" />
                  }
                </div>
                <div className="tinfo">
                    <div>{JSON.parse(localStorage.getItem('drivers'))[0].name}</div>
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
       } else {
        return  <React.Fragment>No more matches</React.Fragment>
        }
    }
}

export default MatchingScreen;
