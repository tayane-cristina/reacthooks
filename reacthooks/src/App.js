import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Home from './pages/home/Home';
import About from './pages/about/About';
import UseState from './components/hooks/useState/useState';
import UseReducer from './components/hooks/useReducer/UseReducer';
import UseReducerTest from './components/hooks/useReducerTest/UseReducerTest';
import Navlinks from './components/navlinks/Navlinks';
import HookUseEffect from './components/hooks/useEffect/HookUseEffect';

//UseContext
import { HookUseContext } from './components/hooks/useContext/HookUseContext';
import { ThemeProvider } from './components/hooks/useContext/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <HookUseContext>
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
            <Route element={<HookUseEffect />} path='/useeffect'></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </HookUseContext>
    </ThemeProvider>
   
  );
}

export default App;
