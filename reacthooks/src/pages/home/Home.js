import React from 'react';
import { Link } from 'react-router-dom';
import About from '../about/About';
import UseState from '../../components/hooks/useState/useState';
import UseReducer from '../../components/hooks/useReducer/UseReducer';
import UseReducerTest from '../../components/hooks/useReducerTest/UseReducerTest';

const Home = () => {
  return (
    <div>
        <h1>Home</h1>

       {/*
        <UseState />
        <UseReducer />
       */} 
        <UseReducerTest />
        
    </div>
  );
};

export default Home;