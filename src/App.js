import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import RoleSelection from './screens/RoleSelection';
import MatchingScreen from './screens/MatchingScreen';
import DriverDetails from './screens/DriverDetails';
import PassengerDetails from './screens/PassengerDetails';
import WaitingForMatch from './screens/WaitingForMatch';
import Trips from './screens/Trips';
import { spring, AnimatedSwitch } from 'react-router-transition';
import './App.css';
import Login from './screens/Login';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="tbg">
          <Route render={(props) => {
            return (
              <div className="theader">
                { props.location.pathname !== '/'  ? <i className="fa fa-cog" aria-hidden="true"></i> : null }
                { props.location.pathname !== '/'  ? <i className="fa fa-align-justify" aria-hidden="true"></i> : null }
                <div className="tlogo">
                  <img src="../assets/logo.PNG" alt="Tinder Logo" title="Tinder Logo" />
                </div>
              </div>)
          }} />
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            {/* Users sign up here*/}
            <Route exact path="/" component={Login} />
            {/* Users select roles here*/}
            <Route exact path="/role-selection" component={RoleSelection} />
            {/* driver enters details and waits here (also gets match notification here): */}
            <Route exact path="/driver-details" component={DriverDetails} />
            {/* passenger enters details and waits here (also gets match notification here): */}
            <Route exact path="/passenger-details" component={PassengerDetails} />

            <Route exact path="/waiting" component={WaitingForMatch} />

            <Route exact path="/matching-screen" component={MatchingScreen} />
            {/* list of trips matched: */}
            <Route exact path="/trips" component={Trips} />
          </AnimatedSwitch>
        </div>
      </BrowserRouter>
    );
  }
}

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

export default App;
