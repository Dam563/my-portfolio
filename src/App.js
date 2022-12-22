import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Navpage from './Navpage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='navbar-section'>
        <Navbar/>
      </div>
      <div className="navpage">
        <Navpage/>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
