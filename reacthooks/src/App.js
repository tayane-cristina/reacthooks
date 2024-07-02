import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Home from './pages/home/Home';
import About from './pages/about/About';
import UseState from './components/hooks/useState/useState';
import UseReducer from './components/hooks/useReducer/UseReducer';
import UseReducerTest from './components/hooks/useReducerTest/UseReducerTest';
import Navlinks from './components/navlinks/Navlinks';
import UseEffect from './components/hooks/useEffect/UseEffect';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>

      <BrowserRouter>
      <Navlinks />
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<About />} path='/about'></Route>

          {/*Hooks*/}
          <Route element={<UseState />} path='/usestate'></Route>
          <Route element={<UseReducer />} path='/usereducer'></Route>
          <Route element={<UseReducerTest />} path='/usereducertest'></Route>
          <Route element={<UseEffect />} path='/useeffect'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
