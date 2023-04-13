// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
// 62e311d0f4a246e79c8f162b2cc4d8d3 api key

// class based proect

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          {/* as a props we add pagesize that how many news we want in one page */}
          {/* <News pageSize={6} country="in" category="general" /> */}
          <Switch>
            {/* if we click we will go to that page so we have to rpovide unique key for that */}
            <Route exact path="/"><News key="general" pageSize={6} country="in" category="general" /></Route>
            <Route exact path="/business"><News key="business" pageSize={6} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={6} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News key="general" pageSize={6} country="in" category="general" /></Route>
            <Route exact path="/health"><News key="health" pageSize={6} country="in" category="health" /></Route>
            <Route exact path="/science"><News key="science" pageSize={6} country="in" category="science" /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={6} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News key="technology" pageSize={6} country="in" category="technology" /></Route>

          </Switch>
        </Router>

      </div>
    )
  }
}
