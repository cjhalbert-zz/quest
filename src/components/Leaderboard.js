import React from 'react'
import PropTypes from 'prop-types'

class Leaderboard extends React.Component {
  render () {
    return (
      <main className="leaderboard">
        <div className="card">
          <header className="leaderboard-header">
            <h1>Leaderboard</h1>
            <div>
              <h2>Filter By: </h2>
              <ul>
                <li>Name /</li>
                <li>Points</li>
              </ul>
            </div>
          </header>
          <ul>
            <li>
              <img src=""/>
              <h2>Name</h2>
              <p>Points</p>
            </li>
          </ul>
        </div>
      </main>
    )
  }
}

export default Leaderboard;
