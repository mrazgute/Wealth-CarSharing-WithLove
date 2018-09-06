import React, { Component } from 'react';

import '../css/match.css'

class Match extends Component {
  render() {
    return (
      <div className="tbg">
        <div className="match">
          <div className="mtext">Let's ride!</div>
          <div className="m1"><img src="../assets/man.jpg" /></div>
          <div className="m2"><img src="../assets/women.jpg" /></div>
          <div className="sendmsg"><i className="fa fa-phone" aria-hidden="true"></i>877324234</div>
        </div>
        <div className="theader-match">
          <i className="fa fa-cog" aria-hidden="true"></i>
          <i className="fa fa-comments" aria-hidden="true"></i>
          <div className="tlogo">
            <img src="../assets/logo.PNG" alt="Tinder Logo" title="Tinder Logo" />
          </div>
        </div>
        <div className="tbgwrap-match">
          <div className="tphoto">
            <img src="http://www.amicnews.com/wp-content/uploads/2015/04/Sunglasses-Trends-for-Summer-2015.jpg" title="tphoto" alt="Tinder Photo" />
            <div className="tname">Jane Doe, <span className="age">27</span></div>
            <div className="tinfo"><i className="fa fa-book" aria-hidden="true"> 0</i><i className="fa fa-users" aria-hidden="true"> 0</i></div>
          </div>
          <div className="tcontrols">
            <div className="tno"><i className="fa fa-times" aria-hidden="true"></i></div>
            <div className="ti"><i className="fa fa-info" aria-hidden="true"></i></div>
            <div className="tyes"><i className="fa fa-heart" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
