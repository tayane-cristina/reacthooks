import React from 'react';
import { Link } from 'react-router-dom';

const Navlinks = () => {
  return (
    <div>
      <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Navlinks;