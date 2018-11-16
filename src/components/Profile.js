import React from 'react'
import profilepic from '../img/profilepic.jpg';

class Header extends React.Component {
  render () {
    return (
      <div className="profile">
        <section className="profile-picture">
          <img src={profilepic} alt=""/>
        </section>
        <section className="profile-info">
          <div className="profile-name">
            <h1>Corey Halbert</h1>
            <h2>@cjhalbert</h2>
          </div>
          <div>
            <h3>Bio:</h3>
            <p className="bio">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.</p>
          </div>
          <div>
            <p className="profile-level">Lvl. 3</p>
            <div className="progress-bar"></div>
          </div>
        </section>
      </div>
    )
  }
}

export default Header;
