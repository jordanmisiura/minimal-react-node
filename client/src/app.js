import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap';

import './app.css';

import EnterNameComp from './enternamecomp';
import CompTwo from './comptwo';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nameString: ""
		};
	}

	onNameChanged(name) {
		this.setState({
			nameString: name
		});
	}

	render() { 
		return (
			<div>
				<Grid>
					<Row>
						<div className='header'>
							<h1>
								<span className='apptitle'>Minimum React Node Test app</span>
							</h1>
						</div>
					</Row>
					<Row>
						{this.state.nameString.length > 0 ? <CompTwo userName={this.state.nameString} /> : <EnterNameComp onNameChanged={this.onNameChanged.bind(this)}/>}
					</Row>
				</Grid>
			</div>); 
	} 	
}

export default App;