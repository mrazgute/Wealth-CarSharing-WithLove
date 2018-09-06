import React, { Component } from 'react';
import getURL from './../components/getURL';

class RoleSelection extends Component {
	constructor(props) {
		super(props);
		this.handleRoleSelection = this.handleRoleSelection.bind(this);
	}

	handleRoleSelection(role) {
		fetch(`${getURL()}/match/${role}/reset/`, {
      		method: 'GET',
		}).then(res => res.json())
		.then(matches => {
			console.log(`reseted role: ${role}`);
		}).catch(e => {
			console.log('error on reset role', e);
		});
		localStorage.setItem('role', role);
		this.props.history.push(`${role}-details`);
	};

	render() {
		return <div><div className="tbgwrap">
				<center><p>Driver or passenger?</p></center>
				<div className="selectList">
					<div className="selectImageLeft" onClick={()=> this.handleRoleSelection('driver')}>
						<img src="/assets/driver.jpg" />
					</div>
					<div className="selectImage" onClick={()=> this.handleRoleSelection('passenger')}>
						<img src="/assets/passenger.jpg" />
					</div>
				</div>
			</div>
			</div>;
	}
}

export default RoleSelection;
