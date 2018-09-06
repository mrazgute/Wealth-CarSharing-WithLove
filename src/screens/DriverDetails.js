import React, { Component } from 'react';

class DriverDetails extends Component {
    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection = (answer) => {
        console.log(answer);
    }

    render() {

        return <React.Fragment>
            <div className="tbgwrap">
                <div className="tphoto">

                    <img src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=456245a5bd2285aab008f61a9c3ba5ed&auto=format&fit=crop&w=360&q=80" title="tphoto" alt="Tinder Photo" />

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

export default DriverDetails;
