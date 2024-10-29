import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Birthday Website!</h1>
      <p>Celebrate with us!</p>
      <nav>
        <Link to="/gallery">View Gallery</Link>
        <br />
        <Link to="/birthday-card">View Birthday Card</Link>
      </nav>
    </div>
  );
};

export default Home;
