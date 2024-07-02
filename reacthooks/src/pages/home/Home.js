import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <h2>Hooks</h2>
        <ul>
          <li><Link to="/usestate">UseState</Link></li>
          <li><Link to="/usereducer">UseReducer</Link></li>
          <li><Link to="/usereducertest">UseReducer com Action</Link></li>
          <li><Link to="/useeffect">UseEffect</Link></li>
        </ul>
    </div>
  );
};

export default Home;