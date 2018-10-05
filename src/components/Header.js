import React from 'react'
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <header>
        <nav>
          <ul>
            <li><NavLink to="/">Leaderboard</NavLink></li>
            <li><NavLink to="/assignments">Assignments</NavLink></li>
            <li><NavLink to="/syllabus">Syllabus</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
