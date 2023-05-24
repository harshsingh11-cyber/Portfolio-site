import React from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import './Skill.css';

function Skill() {
  return (
    <section id='skill'>
      <h5>What Skills i have </h5>
      <h2>My Skills</h2>

      <div className="container skill_container">
        <div className="skill__frontend">

          <h3>Web - Development</h3>
          <div className="content__frontend">
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>Node js</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* <div className="skill__backend">

        <h3>Backend Development</h3>
          <div className="content__frontend">
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>Node js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            
          </div>
        </div> */}
        <div className="skill__frontend">

          <h3>Programming Language</h3>
          <div className="content__frontend">
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>C</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
              <h4>C++</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>JAVA</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Skill
