import React from 'react'
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render () {
    return (
      <nav className="navigation">
        <ul>
          <li><NavLink to="/">Leaderboard</NavLink></li>
          <li><NavLink to="/assignments">Assignments</NavLink></li>
          <li><NavLink to="/syllabus">Syllabus</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
