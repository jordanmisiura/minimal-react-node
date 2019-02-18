import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Row, Col, Grid, Button, ControlLabel, FormControl } from 'react-bootstrap';

import './movieselectioncomp.css';

const MOVIE_LIST = ["blah1", "blah2", "blah3"];

class MovieSelectionComp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			movieSelection:{value: '', label:''}
		}

		this.onMovieSelectFieldChange = this.onMovieSelectFieldChange.bind(this);
		this.getMovieSelectionList = this.getMovieSelectionList.bind(this);
	}

	onRandomMovieSelectionClick() {
		console.log("random movie clicked");
	}

	onMovieSelectFieldChange(fieldName, selection) {
	    this.setState({
	      movieSelection : selection
	    });
	}

	getMovieSelectionList() {
		return MOVIE_LIST.map((movie) => {
			return {
				label: movie,
				value: movie
			};
		});
	}

	renderMovieSelectionArea() {
		return (
			<div>
				<Grid>
					<Row className="select-movie-text">
						<ControlLabel>Select movie: </ControlLabel>
					</Row>
					<Row>
						<Col>
						    <Select
						      className="movieselection-field"
						      name="movie-select"
					          value={this.state.movieSelection}
					          options={this.getMovieSelectionList()}
					          onChange={this.onMovieSelectFieldChange.bind(this, 'movieselect')}
					        />
					    </Col>
					    <Col>
							<Button className="movieselection-random"
									bsStyle="default" 
									onClick={this.onRandomMovieSelectionClick.bind(this)}>Or pick random movie</Button>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

	renderMovieInfoArea() {
		return (
			<div>
				
			</div>
		);
	}

	render() { 
		return (
			<div className="movieselectioncomp">
				<Grid>
					<Row>
						<div>
							<ControlLabel className="movie-selection-title-text">Movie list poll for {this.props.userName}</ControlLabel>
							<hr/>
						</div>
					</Row>
					<Row>
						{this.renderMovieSelectionArea()}	
					</Row>
				</Grid>
			</div>
		); 
	} 	
}

export default MovieSelectionComp;