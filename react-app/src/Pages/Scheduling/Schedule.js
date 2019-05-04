// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'
import PropTypes from "react"
import Course from '../../Data/Course'
import './Schedule.css'

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
export default class Schedule extends Component {
    constructor(props) {
        super(props)

        let softEng = new Course("Software Engineering", 420, "COS", "3", "5", [ "required" ], 3)

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
            <div className="ScheduleDayHeader">
                <p>{props.day}</p>
            </div>
            {props.courses.map(courseSection => {
                return (<CourseSectionFrame details={courseSection.course} />)
            })}
        </div>
    )
}

const CourseSectionFrame = (props) => {
    return (
        <div className="CourseSectionFrame">
            <p>{props.details.department} {props.details.number}</p>
        </div>
    )
}