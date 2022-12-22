import React from 'react';
import './App.css';
import linked from './linked.png';
import twitter from './twitter.png'

function Contact() {
    return ( 
        <div className="contact">
            <h2>Get in Touch</h2>
            <p>You can contact me through:</p>
            <p>Email: babatundedamilola334@gmail.com</p>
            <p>Phone/WhatsApp: +2349072681492</p>

            <div className='socialmedia'>
            <a href="https://www.linkedin.com/in/damilolaabigailbabatunde" target="_blank"><img src={linked} alt="twitter" className="social"/></a>
            <a href="https://twitter.com/dynamic_dammy" target="_blank"><img src={twitter} alt="twitter" className="socials"/></a>
            </div>
            <div className="footer-about1">
            <footer>
            <span>&copy; Copyright Damilola Babatunde 2022</span>
            </footer>
        </div>
          </div>
     );
}

export default Contact;