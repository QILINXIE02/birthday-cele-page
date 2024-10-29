import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#ffcc00' }}>
      <h1>Birthday Celebration</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/gallery">Gallery</Link>
      </nav>
    </header>
  );
};

export default Header;
