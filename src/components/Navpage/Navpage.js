import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../../App";
import About from "../../pages/About/About";
import Project from "../../pages/Project/Project"
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";


function Navpage() {
    return ( 
        <div className="navpage">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
     );
}

export default Navpage;