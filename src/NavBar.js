import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">TODO</a>
          </div>
          <ul className="nav navbar-nav">
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
