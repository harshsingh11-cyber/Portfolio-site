import React from 'react';
import ME from '../imagess/harsh3.jpg';
import { FaAward } from "react-icons/fa";
import { FaUserCircle, FaFolder } from "react-icons/fa";
import './About.css';

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about photos" />
          </div>

        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small> 3+ year Working</small>
            </article>

            <article className="about__card">
              <FaUserCircle className='about__icon' />
              <h5>Clients</h5>
              <small> 200+ worldwide</small>
            </article>

            <article className="about__card">
              <FaFolder className='about__icon' />
              <h5>Projects</h5>
              <small> 80+ completes</small>
            </article>
          </div> */}
<p>Hello, I am Harsh Singh👋</p>
          <p>I am a passionate Full Stack Web Developer who focuses on writing clean and user-friendly applications using MERN and some other cool libraries and frameworks..As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.</p>
          <a href="#" className='btn btn-primary'> Let's Talk</a>

        </div>
      </div>



    </section>
  )
}

export default About
