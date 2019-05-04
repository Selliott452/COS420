// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import "./ClassSearch.css"

let courseList = []

export default class ClassSearch extends Component {
  render() {
    return (
      <div className="SearchFrame">
        <TextField placeholder="Search for classes" />
        <div className="SearchResults">
        {courseList.map(course => {
          return (<Course details={course} />)
        })}
        </div>
      </div>
    )
  }
}
