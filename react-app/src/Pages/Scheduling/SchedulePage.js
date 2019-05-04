// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react';
import Schedule from './Schedule';
import Catalogue from './Catalogue';
import ClassSearch from './ClassSearch';
import DBManager from '../../dbManager';
import "./SchedulePage.css";

/**
 * The container component for the triple purpose Search / Schedule / Catalogue page.
 */

export default class SchedulePage extends Component {
	componentDidMount() {
		const dbManager = DBManager.getInstance();

		dbManager.getClasses();
	}

	render() {
		return (
			<div >
				<div className="ScheduleFrame" >
					<ClassSearch />
					<Schedule />
				</div>
				<Catalogue />
			</div>
		)
	}
}
