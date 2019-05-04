import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Schedule from './Schedule';
import ClassSearch from './ClassSearch';
import DBManager from '../../dbManager';
import Course from '../../Data/Course';
import "./SchedulePage.css";

/**
 * The container component for the triple purpose Search / Schedule / Catalogue page.
 */

class SchedulePage extends Component {
	state = {
		schedule: []
	}

	addClass = course => this.setState({schedule : this.state.schedule.concat(course)});
	removeClass = course => this.setState({schedule : (this.state.schedule.splice(this.state.schedule.indexOf(course), 1), this.state.schedule)});
	storeSchedule = () => DBManager.getInstance().saveSchedule(this.state.schedule);
	
	async componentDidMount() {
		this.setState({ schedule : (await DBManager.getInstance().getSchedule()).map(course => Course.create(course))});
	}

	logout = () => this.props.history.push('');

	render() {
		return (
			<div className="SchedulePageFrame">
				<div className="SchedulePageHeader">
					<Button style={{'marginTop': '-10px',
									'marginLeft': '20px'}} variant="contained" color="primary" onClick={this.logout}>Logout</Button>
					<Typography variant="h4" color='textPrimary' align="center" gutterBottom>
						Build a Schedule
					</Typography>
				</div>
				<div className="ScheduleFrame" >
					<ClassSearch addClass={this.addClass} />
					<Schedule schedule={this.state.schedule} removeClass={this.removeClass} />
					<Button variant="contained" color="primary" onClick={this.storeSchedule}>Store Schedule</Button>
				</div>
			</div>
		)
	}
}

export default SchedulePage;
