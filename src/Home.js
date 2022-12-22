import React from 'react';
import homme from './homme.png';

function Home() {
    return ( 
        <div className="home-page">
        <div className='main'>
        <div className="home">
          <p className='my-name'>Hi, I am Damilola Babatunde.</p>
          <h1 className='dev'>A FRONT-END DEVELOPER</h1>
          <p className='my-work'>I build amazing stuffs on the web.</p>
      </div>
      <div><img src={homme} alt="" width={500}/></div>
      </div>
      <div className="footer-home">
            <footer>
                <span>&copy; Copyright Damilola Babatunde 2022</span>
            </footer>
        </div>
        </div>
     );
}

export default Home;