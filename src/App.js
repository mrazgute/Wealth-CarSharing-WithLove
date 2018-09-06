import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import RoleSelection from './screens/RoleSelection';
import logo from './logo.svg';
import './App.css';

import Signup from './screens/Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          {/* Users sign up here*/}
          <Route exact path="/signup" render={() => <Signup />}/>
          {/* Users select roles here*/}
          <Route exact path="/role-selection" component={RoleSelection}/>
          {/* driver enters details and waits here (also gets match notification here): */}
          <Route exact path="/driver-details" render={() => <div>driver enters details and waits here (also gets match notification here)</div>}/>
          {/* passenger enters details and waits here (also gets match notification here): */}
          <Route exact path="/passenger-details" render={() => <div>passenger enters details and waits here (also gets match notification here)</div>}/>
          {/* list of trips matched: */}
          <Route exact path="/trips" render={() => <div>list of trips matched</div>}/>
        </Switch>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
