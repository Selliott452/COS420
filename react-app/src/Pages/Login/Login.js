// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="LoginPage" >
        { /* Needs to be passed a function to save the username to a variable */ }
        <LoginField />
        { /* Needs to be passed a function to the save the password to a variable */ }
        <LoginField />
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
        return (<div style={{ backgroundColor: "red" }} />)
    }
}
