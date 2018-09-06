import React, { Component } from 'react';

class Trips extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <React.Fragment>
            <div class="tbgwrap">
                <div class="login">
                    <div class="list">
                        <a href="#">Trip with Adelė to Palanda on 22:00</a>
                        <a href="#">Trip with Kazytė to Žirmūnai on 8:00</a>
                        <a href="#">Trip with Adelė to Antakalnis on 17:00</a>
                    </div>
                </div>
            </div>
        </React.Fragment>;
    }
}

export default Trips;
