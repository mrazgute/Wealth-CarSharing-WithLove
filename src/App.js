import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import RoleSelection from './screens/RoleSelection';
import MatchingScreen from './screens/MatchingScreen';
import DriverDetails from './screens/DriverDetails';
import Trips from './screens/Trips';

import './App.css';

import Login from './screens/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="tbg">
          <div className="theader">
            <i className="fa fa-cog" aria-hidden="true"></i>
            <i className="fa fa-align-justify" aria-hidden="true"></i>
            <div className="tlogo">
              <img src="../assets/logo.PNG" alt="Tinder Logo" title="Tinder Logo" />
            </div>
          </div>
          <Switch>
            {/* Users sign up here*/}
            <Route exact path="/" component={Login} />
            {/* Users select roles here*/}
            <Route exact path="/role-selection" component={RoleSelection} />
            {/* driver enters details and waits here (also gets match notification here): */}
            <Route exact path="/driver-details" component={DriverDetails} />
            {/* passenger enters details and waits here (also gets match notification here): */}
            <Route exact path="/passenger-details" render={() => <div>passenger enters details and waits here (also gets match notification here)</div>} />

            <Route exact path="/matching-screen" component={MatchingScreen} />
            {/* list of trips matched: */}
            <Route exact path="/trips" component={Trips} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
