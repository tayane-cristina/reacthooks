import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../hooks/useContext/ThemeProvider';

const Navlinks = () => {

  const {theme, togleTheme} = useContext(themeContext)
  return (
    <div style={{background: theme === "dark" ? "#000000ea" : "#faf7f7ea", color: theme === "dark" ? "#000000ea" : "#faf7f7ea", transition: "0.5s"}}>
      <nav className='nav-header'>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
      </nav>
      <button onClick={togleTheme}>Trocar tema</button>
    </div>
  );
};

export default Navlinks;