import React from 'react';
import paul from '../../assets/paul_amusan.png';
import ihub from '../../assets/ihub (2).PNG'
import Navbar from '../../components/Navbar/Navbar';
import './project.css';
import signup from '../../assets/signup (2).PNG';
import tynker from '../../assets/tynker (2).PNG';
import todo from '../../assets/todo (2).PNG'


const Project = () => {
  return (
    <div className='projects'>
        <div className='navbar_div'>
      <Navbar />
      </div>
        <div className='my_projects'>
            <figure className='project-figure'>
        <img src={ihub} alt='ihub' className='paul'/>
        <figcaption>
          Workwise, is a global freelancing platform and social networking  <br/>where businesses and independent
          professionals connect and  <br/>collaborate remotely built with React JS, Redux, Scss.
          </figcaption>
        <a href='https://github.com/Dam563/mock-up' className='link_btn'>GitHub Link</a>
        <a href='https://github.com/Dam563/mock-up' className='link_btn'>Live Link</a>
        </figure>
        <figure>
        <img src={paul} alt='Paul Amusan' className='paul'/>
        <figcaption>This is a simple portfolio landing page created with HTML and CSS.</figcaption>
        <a href='https://github.com/Dam563/portfolio_Page' className='link_btn'>GitHub Link</a>
       <a href='https://eclectic-beijinho-06d366.netlify.app/' className='link_btn'>Live Link</a>
        </figure>
        <figure>
        <img src={signup} alt='Paul Amusan' className='paul'/>
        <figcaption>This is a simple sign up page created with HTML and CSS.</figcaption>
        <a href='https://github.com/Dam563/sign_Up_Page' className='link_btn'>GitHub Link</a>
       <a href='https://classy-tanuki-22f8fa.netlify.app/' className='link_btn'>Live Link</a>
        </figure>
        </div>
        <div className='my_projects'>
        <figure>
        <img src={tynker} alt='Paul Amusan' className='paul'/>
        <figcaption>This is the clone of the landing page of Tynker <br/>(a coding school for kids) using React Js and CSS.</figcaption>
        <a href='https://github.com/Dam563/Tynker_clone' className='link_btn'>GitHub Link</a>
        <a href='https://thriving-kleicha-a37c37.netlify.app/' className='link_btn'>Live Link</a>
        </figure>
        <figure>
        <img src={todo} alt='Paul Amusan' className='pauls'/>
        <figcaption>This is a simple todo list built with HTML, CSS, and JavaScript.</figcaption>
        <a href='https://github.com/Dam563/todo_list' className='link_btn'>GitHub Link</a>
        <a href='https://melodious-crisp-fe08ac.netlify.app/' className='link_btn'>Live Link</a>
        </figure>
     
        </div>

           

    </div>
  )
}

export default Project