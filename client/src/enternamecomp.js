import React, { Component } from 'react';
import { Row, Col, Grid, Button, ControlLabel, FormControl } from 'react-bootstrap';
import './enternamecomp.css'

class EnterNameComp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			nameString: ''
		}
	}

	onNameConfirmClick() {
		console.log("this button is being clicked");

		this.props.onNameChanged(this.state.nameString);
	}

	onNameTextChange(event) {
		const text = event.target.value;  //should we trim and validate?
		this.setState({
			nameString: text
		});
	}

	render() { 
		return (
			<div className='enternamecomp'>
				<Grid>
					<Row>	
						<ControlLabel className="entername-text">Enter your name: </ControlLabel>
					</Row>
					<Row>
			    		<FormControl className="entername-entry-field" type="text" value={this.state.nameString} onChange={this.onNameTextChange.bind(this)} placeholder="Enter your name"/>
					</Row>
					<Row>
						<Button bsStyle="default" className="entername-accept-button" onClick={this.onNameConfirmClick.bind(this)}>Accept Name</Button>
					</Row>
				</Grid>
			</div>
		); 
	} 	
}

export default EnterNameComp;