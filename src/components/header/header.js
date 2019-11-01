import React from 'react';
import './header.css';

const Header = () => (
  <div className="container">
    <div className="jumbotron bg text-center">
      <h1 className="logo">Superhero Clicky Game</h1>
      <p className="desc">Click on a superhero to earn points, if you click the same superhero twice you lose!</p>
    </div>
  </div>
);

export default Header;