import React from 'react';
import './nav.css';

const Nav = () => (
    <nav className="navbar mb-1 navigation">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">New Game</a>
      </div>
      <ul className="nav navbar-nav">
        <a href="https://github.com/lalaneha/Clicky-game">GitHub Repo</a>
      </ul>
    </nav>
);

export default Nav;