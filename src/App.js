import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Leaderboard from './components/Leaderboard.js';
import Assignments from './components/Assignments.js';
import Syllabus from './components/Syllabus.js';
import Navigation from './components/Navigation.js';
import Profile from './components/Profile.js';

import Header from './components/Header.js';

const App = () => (
  <div>
    <Header />
    <Profile />
    <Navigation />
    <Switch>
      <Route exact path="/" component={Leaderboard}></Route>
      <Route exact path="/assignments" component={Assignments}></Route>
      <Route exact path="/syllabus" component={Syllabus}></Route>
    </Switch>
  </div>
)



export default App;
