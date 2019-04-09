import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Route } from 'react-router-dom';
import Schedule from './schedule/Schedule';
import logo from './logo.svg';
import './App.css';

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
        <Route path="/" component={Schedule} />
      </BrowserRouter>
    );
  }
}

export default App;
