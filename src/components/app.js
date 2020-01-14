import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from './pages/about';
import Home from './pages/home';
import Navbar from './navigation/navbar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Knorrs.net</h1>
        <h2>by Andrew Knorr</h2>
        <div className='nav-wrapper'>
          <Navbar/>
        </div>
        <div className='content-wrapper'>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </div>
        <div className='footer-wrapper'>

        </div>
      </div>
    );
  }
}
