import React from "react";
import ham from './ham.png'
import { NavLink } from "react-router-dom";



function Navbar() {
    return ( 
        <div className="navbar">
            <NavLink to='/'><p className="nav-link">Home</p></NavLink>
           <NavLink to='/about'><p className="nav-link">About</p></NavLink>
           <NavLink to='/projects'><p className="nav-link">Projects</p></NavLink>
           <NavLink to='/contact'><p className="nav-link">Contact</p></NavLink>
           </div>
     );
}

export default Navbar;