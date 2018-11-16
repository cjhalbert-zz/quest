import React from 'react'
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render () {
    return (
      <nav className="nav">
        <ul>
          <li><NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink></li>
          <li><NavLink to="/assignments" activeClassName="active">Assignments</NavLink></li>
          <li><NavLink to="/syllabus" activeClassName="active">Syllabus</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
