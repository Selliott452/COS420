// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import "./Login.css"

export default class Login extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }

  readEmailAddress(event) {

  }

  render() {
    return (
      <div className="LoginPage" >
        { /* Needs to be passed a function to save the username to a variable */ }
        <TextField onChange={readEmailAddress} autoFocus={true} defaultValue="Email Address" />
        { /* Needs to be passed a function to the save the password to a variable */ }
        <TextField defaultValue="Password" />
      </div>
    )
  }
}
