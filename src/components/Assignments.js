import React from 'react'
import PropTypes from 'prop-types'

class Assignments extends React.Component {
  render () {
    return (
      <main>
        <h1>Due Today:</h1>
        <div className="card"></div>
        <h1>Due Soon:</h1>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <h1>Upcoming:</h1>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </main>
    )
  }
}

export default Assignments;
