// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'
import "./Login.css"

export default class Login extends Component {
  render() {
    return (
      <div className="LoginPage" >
        { /* Needs to be passed a function to save the username to a variable */ }
        <LoginField label="username" />
        { /* Needs to be passed a function to the save the password to a variable */ }
        <LoginField label="password" />
      </div>
    )
  }
}

class LoginField extends Component {
    constructor(props) {
        super(props)

        /** Stuff for handling input */
    }

    render() {
        return (
          <div className="LoginField">
            <p>{this.props.label}</p>
          </div>
        )
    }
}
