// 120 characters     ******************************************************************************************     |
// @ts-check

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import HomePage from './Pages/Planning/HomePage';
import SchedulePage from './Pages/Scheduling/SchedulePage';

/* Reserved for the Navigation System */

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Set page title */}
          <Helmet>
            <title>Advisely</title>
          </Helmet>

        </div>
        {/* Set routes for their corresponding URL extensions */}
        <Route exact path="/" component={Login} />
        <Route path="/planning" component={HomePage} />
        <Route path="/scheduling" component={SchedulePage} />
      </BrowserRouter>
    );
  }
}

export default App;
