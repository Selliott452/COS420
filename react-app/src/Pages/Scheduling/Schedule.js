// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'
import PropTypes from "react"
import './Schedule.css'

/** The Schedule Viewer 
 * 
 * 
 * 
 * This file should be used as a model for any component we write. As with any good model, it should be updated as we 
 * find new improvements for our code.
 * **/


/**
 * Courses to the used throughout the app.
 * 
 * TODO: Expand to hold all of the properties of a full course.
 */
class Course {
    /**
     * @param {string} title
     * @param {string} department
     * @param {number} number
     */
    constructor(title, department, number) {
        this.title = title
        this.department = department
        this.number = number
    }
}

 /**
  * A schedule viewer
  * 
  */
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

export default Schedule
