import React from 'react'
import PropTypes from 'prop-types'

import sword from '../img/SVG/sword.svg';

class Leaderboard extends React.Component {

  componentWillMount() {
    if (window.location.pathname != "/leaderboard") {
      window.location.pathname = "/leaderboard";
    }
  }

  render () {
    return (
      <main className="leaderboard">
        <div className="center">
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
          <ul className="leaderboard-list">
            <li>
              <div>
                <span>
                  <img src={sword}/>
                </span>
                <h2>Corey Halbert</h2>
              </div>
              <h3>@cjhalbert</h3>
              <p>1,000 Points</p>
            </li>
            <li>
              <div>
                <span>
                  <img src={sword}/>
                </span>
                <h2>Corey Halbert</h2>
              </div>
              <h3>@cjhalbert</h3>
              <p>1,000 Points</p>
            </li>
            <li>
              <div>
                <span>
                  <img src={sword}/>
                </span>
                <h2>Corey Halbert</h2>
              </div>
              <h3>@cjhalbert</h3>
              <p>1,000 Points</p>
            </li>
            <li>
              <div>
                <span>
                  <img src={sword}/>
                </span>
                <h2>Corey Halbert</h2>
              </div>
              <h3>@cjhalbert</h3>
              <p>1,000 Points</p>
            </li>
            <li>
              <div>
                <span>
                  <img src={sword}/>
                </span>
                <h2>Corey Halbert</h2>
              </div>
              <h3>@cjhalbert</h3>
              <p>1,000 Points</p>
            </li>
            <li>
              <div>
                <span>
                  <img src={sword}/>
                </span>
                <h2>Corey Halbert</h2>
              </div>
              <h3>@cjhalbert</h3>
              <p>1,000 Points</p>
            </li>
            <li>
              <div>
                <span>
                  <img src={sword}/>
                </span>
                <h2>Corey Halbert</h2>
              </div>
              <h3>@cjhalbert</h3>
              <p>1,000 Points</p>
            </li>
            <li>
              <div>
                <span>
                  <img src={sword}/>
                </span>
                <h2>Corey Halbert</h2>
              </div>
              <h3>@cjhalbert</h3>
              <p>1,000 Points</p>
            </li>
          </ul>
        </div>
        </div>
      </main>
    )
  }
}

export default Leaderboard;
