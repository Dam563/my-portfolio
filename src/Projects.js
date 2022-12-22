import React from 'react';
import './App.css';

function Projects() {
    return ( 
        <div className="myproject">
            <p className='project-text'>Some of my projects are :</p>
            <p className='project-text'> * Tynker Clone: I cloned the landing page of Freshworks website(a coding school for kids) using React Js and CSS.</p>
            <p className='project-text'>* To-do page: This is a simple todo list built with HTML, CSS, and JavaScript.</p>
            <p className='project-text'>* Portfolio page: This is a static portfolio page built with pure HTML and CSS. </p>
            <p className='project-text'>* SignUp Form: This is a simple sign up page created with HTML and CSS.</p>
            <p className='project-text'> You can find my projects 
                on my <a href="https://github.com/Dam563" target="_blank">GitHub Page</a>.
                
            </p>
            <div className="footer-about">
            <footer>
            <span>&copy; Copyright Damilola Babatunde 2022</span>
            </footer>
        </div>
        </div>
     );
}

export default Projects;