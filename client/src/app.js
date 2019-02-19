import React, { Component } from 'react';
import { Row, Col, Grid, Button, ControlLabel, FormControl } from 'react-bootstrap';

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

	componentDidMount() {
		fetch('./api/movieimage')//'./test')
		.then((response)=> {
			if (response.status !== 200) {
		        console.log('Looks like there was a problem. Status Code: ' +
		          response.status);
		        return;
		      }

		      // Examine the text in the response
		      console.log("response is: ");
		      console.log(response);
		      console.log(response.headers.get('Content-Type'));

		      response.json().then(function(data) {
		        console.log(data);
		      });
		})
		.catch((err)=> {
			console.log("error from fetch");
		})
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