import React, { Component } from 'react';

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
			<div className="tbgwrap">
				<center><p>Driver or passenger?</p></center>
				<div className="selectList">
					<div className="selectImageLeft" onClick={()=> this.handleRoleSelection('driver')}>
						<img src="/assets/driver.jpg" />
					</div>
					<div className="selectImage" onClick={()=> this.handleRoleSelection('driver')}>
						<img src="/assets/passenger.jpg" />
					</div>
				</div>
			</div>
		</React.Fragment>;
	}
}

export default RoleSelection;
