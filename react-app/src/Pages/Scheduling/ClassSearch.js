// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DBManager from '../../dbManager';
import Course from '../../Data/Course'
import "./ClassSearch.css"
import { withStyles } from '@material-ui/core';


let CourseFrame = (props) => {
	return (
	<div className="Course">
		<p className="CourseNumber">{props.details.department} {props.details.number}</p>
		<p className="CourseTitle">{props.details.title}</p>
	</div>
	)
}

let courseList = []

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 500,
		maxHeight: 500,
		overflow: 'auto',
		backgroundColor: theme.palette.background.paper,
	}
});

class ClassSearch extends Component {
	state = {
		searchResults: []
	}
	
	constructor(props) {
		super(props);
	}
	
	search = async ({ target: { value }}) => {
		const dbManager = DBManager.getInstance();

		const searchResults = await dbManager.getClasses(value)
			.then(courses => courses.map(course => new Course(course.name, course.number, course.subject, 0, 0, 0, 0)));

    	this.setState({ searchResults });
	}

	render() {
		return (
			<div className="SearchFrame">
				<TextField placeholder="Search for classes" onChange={this.search} />
				
        		<List className={this.props.classes.root}>
					{this.state.searchResults.map(course => (
						<ListItem button onClick={() => this.props.addClass(course)} >
							<ListItemText primary={course.subject + course.number + ":\n" + course.title} key={course.title + course.number}/>
						</ListItem>
					))}
				</List>
			</div>
		)
	}
}

export default withStyles(styles)(ClassSearch);
