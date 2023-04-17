import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import java from '../../assets/java.png';
import bootstrap from '../../assets/bootsrap.png';
import react from '../../assets/react.png';
import git from '../../assets/git.png';
import './about.css'
import Navbar from '../../components/Navbar/Navbar';

const About = () => {
  return (
    <div className='my_about'>
                  <div className='navbar_div'>
      <Navbar />
      </div>
 <div className='about'>
  <p className='about_me'>About Me</p>
    <div className='text'>
                <p  className='para_one'>Hi there. Welcome to my portfolio website. My name is Damilola Babatunde. 
            I am a front-end developer and technical writer based in Lagos, Nigeria.
             I have about eight months experience using various front-end technologies.</p>
             <p  className='para_one'>I enjoy being challenged with projects that require me to work outside of my comfort zone,
                learn new technologies, and collaborate with others.
             I have a degree in Economics from the University of Lagos, Nigeria. When I am not writing codes, I enjoy reading,
            writing, and listening to music.</p>
            <p  className='para_one'>Some of the technologies I have used and still using are:</p>
            <div className='technologies'> 
            <div><img src={html} alt='html logo' className='wrap-html'/>
            {/* <p className='techcolor'>HTML</p> */}
            </div>
            <div><img src={css} alt='css logo'  className='wrap-css'/>
            {/* <p className='techcolor'>CSS</p> */}
            </div>
            <div><img src={java} alt='java logo' className='wrap-java'/>
            {/* <p className='techcolor'>JavaScript</p> */}
            </div>
            <div><img src={bootstrap} alt='bootstrap logo' className='wrap-boot'/>
            {/* <p className='techcolor'>Bootstrap</p> */}
            </div>
            <div><img src={react} alt='react logo' className='wrap-react'/>
            {/* <p className='techcolor'>React</p> */}
            </div>
            <div><img src={git} alt='git logo' className='wrap-react'/>
            {/* <p className='techcolor'>Git</p> */}
            </div>
            
            </div>
            <div className='tech'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Bootstrap</p>
              <p>React</p>
              <p>Git</p>
            </div>
            </div>
            </div>
    </div>
    
  )
}

export default About




// import React from 'react';
// import './App.css';
// import html from './html.png';
// import css from './css.png';
// import java from './java.jpeg';
// import react from './react.png';
// import git from './Git.png';


// function About () {
//     return(
//         <div className="About">
//             <div className='main-about'>
//         <h2 className='aboutme'>ABOUT ME</h2>
//         <p className='p-about'>Hi there. Welcome to my portfolio website. My name is Damilola Babatunde. I am a front-end developer and technical
//             writer based in Nigeria. I have about eight months experience as a software engineering intern.
//         </p>
//         <p className='p-about'>I have a degree in Economics from the University of Lagos. I enjoy writing codes, reading,
//             writing, and playing the piano (I am still a learner though).
//         </p>
//         <p className='p-about'>Some of the few technologies I have worked with and still make use of are :</p>
//         <div className='tech-img'>
//         <span><img src={html} alt="html-logo" className='image-html' /></span>
//         <span><img src={css} alt="css-logo" className='image-html'/></span>
//         <span><img src={java} alt="javascript-logo" className='image-html'/></span>
//         <span><img src={react} alt="react-logo" className='image-html'/></span>
//         <span><img src={git} alt="github-logo" className='image-html'/></span>
//         </div>
//         </div>
//             <div className="footer-about">
//             <footer>
//             <span>&copy; Copyright Damilola Babatunde 2022</span>
//             </footer>
//         </div>
//       </div>

      
//     );
// }

// export default About;