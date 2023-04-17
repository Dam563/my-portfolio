import React from 'react';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
import hi from '../../assets/hi.png';

const Home = () => {
  return (
    <div className='home'>
        {/* <nav>
            <a href='#'>Home</a>
            <a href='../About'>About</a>
        </nav> */}
        <div className='wrapper_one'>
            <h2 className='typing'>Hello there,</h2>
        </div>
        <div className=''><img src={hi} alt='hi logo' width={80}/></div>
            <div className='line'>
                {/* <h2 className='lineUp'>Welcome to my portfolio website</h2> */}
                <h1 className='lineUpo'>I am Damilola Babatunde, </h1>
               <h1 className='lineUp'>a frontend developer.</h1>
                <h3 className='lineUp'>I build amazing things on the web.</h3>
            </div>
           
            <Navbar />
    </div>
  )
}

export default Home














// import React from 'react';
// import homme from './homme.png';

// function Home() {
//     return ( 
//         <div className="home-page">
//         <div className='main'>
//         <div className="home">
//           <p className='my-name'>Hi, I am Damilola Babatunde.</p>
//           <h1 className='dev'>A FRONT-END DEVELOPER</h1>
//           <p className='my-work'>I build amazing stuffs on the web.</p>
//       </div>
//       <div><img src={homme} alt="" width={500}/></div>
//       </div>
//       <div className="footer-home">
//             <footer>
//                 <span>&copy; Copyright Damilola Babatunde 2022</span>
//             </footer>
//         </div>
//         </div>
//      );
// }

// export default Home;