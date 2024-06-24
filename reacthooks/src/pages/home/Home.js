import React from 'react';
import { Link } from 'react-router-dom';
import About from '../about/About';
import UseState from '../../components/hooks/useState/useState';

const Home = () => {
  return (
    <div>
        <h1>Home</h1>

        <UseState />
    </div>
  );
};

export default Home;