import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Project from './pages/Project/Project';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
    {/* <div className='app'>
      <Home/>
      <About />
    </div> */}
      </BrowserRouter>
  )
}

export default App



















// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Navpage from './components/Navpage/Navpage';

// function App() {
//   return (
//     <BrowserRouter>
//     <div className="App">
//       <div className='navbar-section'>
//         <Navbar/>
//       </div>
//       {/* <div className="navpage">
//         <Navpage/>
//       </div> */}

//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;
