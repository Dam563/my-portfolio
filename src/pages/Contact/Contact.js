import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './contact.css';
import mailo from '../../assets/mail-o.png';
import whatssap from '../../assets/whatssap.png';

const Contact = () => {
  return (
    <div className='contact-div'>
      <div className='navbar_div'>
      <Navbar />
      </div>
        <div className='contact'>
            <p className='contact_me'>Contact Me</p>
            <p id='contact-p'>Are you interested in a developer that builds user friendly and scalable web applications.
                Look no further. <br/>
                I am open to junior roles, part time and freelance oportunities.
                Let's talk!
            </p>
            <div className='container'>
                 <div className='left_side'>
                    <div className='leftside-one'>
                    <div><img src={mailo} alt='mail logo' width={50}/></div>
                    <p>babatundedamilola334@gmail.com</p>
                        <a href='mailto:babatundedamilola334@gmail.com' target='_'> Send a mail</a>
                    </div>
                    <div className='leftside-ones'>
                    <div><img src={whatssap} alt='whatssap logo' width={50}/></div>
                    <p>+234- 9072681492</p>
                    <a href="https://wa.me/2349072681492" target='_'>Let's chat</a>
                    </div>
                 </div>
                 <div className='right_side'>
                    <form action='https://getform.io/f/b33b1f39-1338-479f-b607-45c9b700c3b1' method='POST'>
                        <input type='text' placeholder='Your Name' name='name' required className='input'/>
                        <input type='email' placeholder='Email Address'  name='email'required className='input'/>
                        <input type='text' placeholder='Subject' className='input'  name='subject' required/>
                        {/* <input type='hidden' name='style' style='display: none !important' /> */}
                        <textarea cols={20} rows={10} placeholder='Leave a message' required/> <br/>
                        <button type='submit' className='send_button'>Send Message</button>
                    </form>
                 </div>
            </div>
            </div>
    </div>
  )
}

export default Contact





// import React from 'react';
// import './App.css';
// import linked from './linked.png';
// import twitter from './twitter.png'

// function Contact() {
//     return ( 
//         <div className="contact">
//             <h2>Get in Touch</h2>
//             <p>You can contact me through:</p>
//             <p>Email: babatundedamilola334@gmail.com</p>
//             <p>Phone/WhatsApp: +2349072681492</p>

//             <div className='socialmedia'>
//             <a href="https://www.linkedin.com/in/damilolaabigailbabatunde" target="_blank"><img src={linked} alt="twitter" className="social"/></a>
//             <a href="https://twitter.com/dynamic_dammy" target="_blank"><img src={twitter} alt="twitter" className="socials"/></a>
//             </div>
//             <div className="footer-about1">
//             <footer>
//             <span>&copy; Copyright Damilola Babatunde 2022</span>
//             </footer>
//         </div>
//           </div>
//      );
// }

// export default Contact;