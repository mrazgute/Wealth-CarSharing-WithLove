import React, { Component } from 'react';

class RoleSelection extends Component {
	constructor(props) {
		super(props);
		this.handleRoleSelection = this.handleRoleSelection.bind(this);
	}

 	handleRoleSelection = (role) => {
		 console.log(role);
	} 

	render() {

		return <React.Fragment>
			<div className="tabs">
				<button onClick={() =>this.handleRoleSelection('DRIVER')}>Driver</button>
				<button onClick={() =>this.handleRoleSelection('PASSENGER')}>Passenger</button>
			</div>
		</React.Fragment>;
	}
}

export default RoleSelection;
