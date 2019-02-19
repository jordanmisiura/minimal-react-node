import React, { Component } from 'react';
import { Row, Col, Grid, ControlLabel } from 'react-bootstrap';

import './comptwo.css';

class CompTwo extends Component {

	constructor(props) {
		super(props);
	}

	render() { 
		return (
			<div className="comptwo">
				<Grid>
					<Row>
						<div>
							<ControlLabel className="comptwo-title-text">Component 2 for {this.props.userName}</ControlLabel>
						</div>
					</Row>
				</Grid>
			</div>
		); 
	} 	
}

export default CompTwo;