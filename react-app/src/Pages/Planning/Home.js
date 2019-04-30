// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'
import Schedule from '../Scheduling/Schedule'
import "./Home.css"

/** 
 * The top half of the homepage, shown after logging in.
 */

export default class Home extends Component {
  render() {
    return (
      <div className="HomeFrame">
        <WelcomeMessage />
        <Schedule />
      </div>
    )
  }
}

/**
 * A welcome message with basic details about the student's progress.
 */
let WelcomeMessage = (props) => {
    return (
      <div className="WelcomeFrame">
        <p>hey here's some stuff</p>
      </div>
    )
}
