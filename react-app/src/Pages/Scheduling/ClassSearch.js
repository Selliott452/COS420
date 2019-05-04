// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import DBManager from '../../dbManager';
import Course from '../../Data/Course'
import "./ClassSearch.css"


let CourseFrame = (props) => {
	return (
	<div className="Course">
		<p className="CourseNumber">{props.details.department} {props.details.number}</p>
		<p className="CourseTitle">{props.details.title}</p>
	</div>
	)
}

let courseList = []

export default class ClassSearch extends Component {
	state = {
		searchResults: []
	}
	
	constructor(props) {
		super(props)
		
		this.handleSearch.bind(this)
	}
	
	async handleSearch({ target: { value }}) {
		const dbManager = DBManager.getInstance();

		const searchResults = await dbManager.getClasses(value)
			.then(courses => courses.map(course => new Course(course.subject, course.number, 0, 0, 0, 0, 0)))

		this.setState({ searchResults })
	}
	
	render() {
		return (
			<div className="SearchFrame">
				<TextField placeholder="Search for classes" onChange={this.handleSearch} />
				<div className="SearchResults">
					{this.state.searchResults.map(course => (<CourseFrame details={course} />))}
				</div>
			</div>
		)
	}
}