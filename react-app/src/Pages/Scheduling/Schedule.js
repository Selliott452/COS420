// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'
import PropTypes from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Course from '../../Data/Course'
import './Schedule.css'
import { withStyles } from '@material-ui/core';

/** The Schedule Viewer 
 * 
 * 
 * 
 * This file should be used as a model for any component we write. As with any good model, it should be updated as we 
 * find new improvements for our code.
 * **/

 /**
  * A schedule viewer
  * 
  */

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 500,
		maxHeight: 500,
		overflow: 'auto',
		backgroundColor: theme.palette.background.paper,
	}
});

class Schedule extends Component {
    constructor(props) {
        super(props)

        let softEng = new Course("Software Engineering", "COS", 420)

        this.state = {
            schedule: [ 
                { day: "Monday", courseList: [ { time: 1300, course: softEng } ] },
                { day: "Tuesday", courseList: [] },
                { day: "Wednesday", courseList: [ { time: 1300, course: softEng } ] },
                { day: "Thursday", courseList: [] },
                { day: "Friday", courseList: [ { time: 1300, course: softEng } ] }
            ]
        }
    }
    
    render() {
        return (
            <div className="Schedule">
                {this.state.schedule.map(/** @param {{ day: string, courseList: { time: number, course: Course }[] }}  day */
                    dayOfCourses => { return(<ScheduleDay day={dayOfCourses.day} courses={dayOfCourses.courseList} />) }
                )}
                
                <List className={this.props.classes.root}>
					{this.props.schedule.map(course => (
						<ListItem button onClick={() => this.props.removeClass(course)} >
							<ListItemText primary={course.subject + course.number + ":\n" + course.title} key={course.title + course.number}/>
						</ListItem>
					))}
				</List>
            </div>
        )
    }
}

/**
 * 
 * @param {{ day: string, courses: { time: number, course: Course}[] }} props 
 */
const ScheduleDay = (props) => {
    return (
        <div className="ScheduleDay" >
            <p>{props.day}</p>
        </div>
    )
}

// const ClassBlock = () => {
//     <div className="ClassBlock">
//     </div>
// }

export default withStyles(styles)(Schedule);
