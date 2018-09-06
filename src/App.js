import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import RoleSelection from './screens/RoleSelection';
import DriverDetails from './screens/DriverDetails';
import './App.css';

import history from './history';

import Signup from './screens/Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
      <div className="tbg">
      <div className="theader">
        <i className="fa fa-cog" aria-hidden="true"></i>
        <i className="fa fa-comments" aria-hidden="true"></i>
        <div className="tlogo">
          <img src="https://worldvectorlogo.com/logos/tinder-1.svg" alt="Tinder Logo" title="Tinder Logo" />
        </div>
      </div>
        <Switch>
          {/* Users sign up here*/}
          <Route exact path="/signup" render={() => <Signup />}/>
          {/* Users select roles here*/}
          <Route exact path="/role-selection" component={RoleSelection}/>
          {/* driver enters details and waits here (also gets match notification here): */}
          <Route exact path="/driver-details" component={DriverDetails}/>
          {/* passenger enters details and waits here (also gets match notification here): */}
          <Route exact path="/passenger-details" render={() => <div>passenger enters details and waits here (also gets match notification here)</div>}/>

          <Route exact path="/matching-screen" render={() => <div>matching screen</div>}/>
          {/* list of trips matched: */}
          <Route exact path="/trips" render={() => <div>list of trips matched</div>}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
