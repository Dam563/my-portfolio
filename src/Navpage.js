import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";


function Navpage() {
    return ( 
        <div className="navpage">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
     );
}

export default Navpage;