import React from 'react';
import './App.css';
import html from './html.png';
import css from './css.png';
import java from './java.jpeg';
import react from './react.png';
import git from './Git.png';


function About () {
    return(
        <div className="About">
            <div className='main-about'>
        <h2 className='aboutme'>ABOUT ME</h2>
        <p className='p-about'>Hi there. Welcome to my portfolio website. My name is Damilola Babatunde. I am a front-end developer and technical
            writer based in Nigeria. I have about eight months experience as a software engineering intern.
        </p>
        <p className='p-about'>I have a degree in Economics from the University of Lagos. I enjoy writing codes, reading,
            writing, and playing the piano (I am still a learner though).
        </p>
        <p className='p-about'>Some of the few technologies I have worked with and still make use of are :</p>
        <div className='tech-img'>
        <span><img src={html} alt="html-logo" className='image-html' /></span>
        <span><img src={css} alt="css-logo" className='image-html'/></span>
        <span><img src={java} alt="javascript-logo" className='image-html'/></span>
        <span><img src={react} alt="react-logo" className='image-html'/></span>
        <span><img src={git} alt="github-logo" className='image-html'/></span>
        </div>
        </div>
            <div className="footer-about">
            <footer>
            <span>&copy; Copyright Damilola Babatunde 2022</span>
            </footer>
        </div>
      </div>

      
    );
}

export default About;