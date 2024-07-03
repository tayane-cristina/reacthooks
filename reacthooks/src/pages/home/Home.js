import React from 'react';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { someContext } from '../../components/hooks/useContext/HookUseContext';

const Home = () => {

  const { contextValue } = useContext(someContext)
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
        <hr />

        <p>Testando o uso do contexto</p>
        <p><strong>{contextValue}</strong></p>
    </div>
  );
};

export default Home;