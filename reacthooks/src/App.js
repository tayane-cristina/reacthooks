import './App.css';

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom' 
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>

      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
      </nav>
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<About />} path='/about'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
