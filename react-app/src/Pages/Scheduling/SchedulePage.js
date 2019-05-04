// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react';
import Schedule from './Schedule';
import Catalogue from './Catalogue';
import ClassSearch from './ClassSearch';
import "./SchedulePage.css";

/**
 * The container component for the triple purpose Search / Schedule / Catalogue page.
 */

export default class SchedulePage extends Component {
	state = {
		schedule: []
	}

	addClass = course => this.setState({schedule : this.state.schedule.concat(course)});
	removeClass = course => this.setState({schedule : (this.state.schedule.splice(this.state.schedule.indexOf(course), 1), this.state.schedule)});

	render() {
		return (
			<div>
				<div className="ScheduleFrame" >
					<ClassSearch addClass={this.addClass} />
					<Schedule schedule={this.state.schedule} removeClass={this.removeClass} />
				</div>
				<Catalogue />
			</div>
		)
	}
}
