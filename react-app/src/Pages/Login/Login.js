// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import "./Login.css"

export default class Login extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      email: "",
      password: ""
    }

    this.readEmailAddress.bind(this)
    this.readPassword.bind(this)
  }

  readEmailAddress(event) {
    this.setState({ email: event.target.value})
  }

  readPassword(event) {
    this.setState({ password: event.target.value })
  }

  render() {
    // Move to the next page if the username and password work
    if (this.state.email.match(/@maine.edu/)) {
      if (this.state.password == "advisely") {
        return (<Redirect to="/scheduling" />)
      }
    }

    return (
      <div className="LoginPage" >
        { /* Needs to be passed a function to save the username to a variable */ }
        <TextField onChange={this.readEmailAddress} autoFocus={true} placeholder="Email Address" />
        { /* Needs to be passed a function to the save the password to a variable */ }
        <TextField onChange={this.readPassword} placeholder="Password" />
      </div>
    )
  }
}
