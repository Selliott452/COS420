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
  * @param {{ schedule: { time: number, course: Course }[] }} props
  */
const Schedule = (props) => {
    return (
        <div className="Schedule">
            {props.schedule.map(/**
                 * @param {any} day
                 */
day => {
                <ScheduleDay />
            })}
        </div>
    )
}
// Schedule.propTypes = {
//     schedule: PropTypes.arrayOf(PropTypes.shape({
//         timeslot: PropTypes.arrayOf(null, PropTypes.node)
//     }))
// }

const ScheduleDay = () => {
    return <div />
}

const ClassBlock = () => {
    <div className="ClassBlock">
    </div>
}

export default Schedule
