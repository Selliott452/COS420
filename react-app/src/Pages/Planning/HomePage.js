// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react'
import Home from './Home'
import Degree from './Degree'

/**
 * The container component for the double-purpose Home/Degree page
 */

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Home />
        <Degree />
      </div>
    )
  }
}
