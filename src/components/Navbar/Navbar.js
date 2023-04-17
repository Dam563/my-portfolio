import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';



function Navbar() {
    return ( 
        <div className="navbar">
            <Link to='/' className='linkone'>Home</Link>
                <Link to='../About' className='linkone'>About</Link>
                <Link to='../Project' className='linkone'>Project</Link>
                <Link to="../Contact" className='linkone'>Contact</Link>
           </div>
     );
}

export default Navbar;