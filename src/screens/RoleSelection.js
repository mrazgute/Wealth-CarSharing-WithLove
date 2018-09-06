import React, { Component } from 'react';
import history from '../history';

class RoleSelection extends Component {
	constructor(props) {
		super(props);
		this.handleRoleSelection = this.handleRoleSelection.bind(this);
	}

 	handleRoleSelection = (role) => {
		 this.props.history.push(`${role}-details`);
	} 

	render() {
		return <React.Fragment>
			<div className="tabs">
				<button onClick={() =>this.handleRoleSelection('driver')}>Driver</button>
				<button onClick={() =>this.handleRoleSelection('passenger')}>Passenger</button>
			</div>
		</React.Fragment>;
	}
}

export default RoleSelection;
