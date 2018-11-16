import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Leaderboard from './components/Leaderboard.js';
import Assignments from './components/Assignments.js';
import Syllabus from './components/Syllabus.js';
import Navigation from './components/Navigation.js';
import Profile from './components/Profile.js';
import Hero from './components/Hero.js';

import Header from './components/Header.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      eventActive: false,
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Profile />
        {
          this.state.eventActive &&
          <Hero />
        }
        <Navigation />
        <Switch>
          <Route exact path="/" component={Leaderboard}></Route>
          <Route exact path="/leaderboard" component={Leaderboard}></Route>
          <Route exact path="/assignments" component={Assignments}></Route>
          <Route exact path="/syllabus" component={Syllabus}></Route>
       </Switch>
      </div>
    )
  }
}



export default App;
