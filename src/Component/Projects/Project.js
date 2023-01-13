import React from 'react';
import IMG from '../imagess/pro-1.png';
import IMG1 from '../imagess/pro-2.png';
import IMG2 from '../imagess/pro-3.png';
import IMG3 from '../imagess/pro-4.png';
import IMG4 from '../imagess/pro-5.png';
import './Project.css';


const data = [
  {
    id:1,
    image: IMG1,
    title:'E-commerce Site - Amazon-Clone-app',
    github:'https://github.com/harshsingh11-cyber/Amazon-clone-app',
    demo:'https://amazon-clone-webapp-harsh.netlify.app/'
  },
  {
    id:2,
    image: IMG2,
    title:'Whatsapp-Web-Clone',
    github:'https://github.com/harshsingh11-cyber/Whatsapp-web-clone',
    demo:'https://resplendent-lamington-bd1191.netlify.app/'
  },
  {
    id:3,
    image: IMG3,
    title:'Crypto-Coin-Pair-Game',
    github:'https://github.com/harshsingh11-cyber/JavaScript-Mini-Project---JS-Mini-Project---4ye490j5uwgt',
    demo:'https://crypto-curency-pair-game.netlify.app/'
  },
  {
    id:4,
    image: IMG,
    title:'Drum - Set',
    github:'https://github.com/harshsingh11-cyber/DramSet-master',
    demo:'https://silver-alfajores-16dd41.netlify.app/'
  },
  {
    id:5,
    image: IMG4,
    title:'Simple - Gallary',
    github:'https://github.com/harshsingh11-cyber/HTML-CSS-Project---Base-Tags-Meta-Tags-Body-Div-Span-P-tag---Post-Class---nyide91l6hw8',
    demo:'https://gallery-app-js.netlify.app/'
  }
]
function Project() {
  return (
    <section id='project'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container project__container">
       {
        data.map(({id,image,title,github,demo}) => {
          return(
            <article key ={id} className='project__item'>
            <div className="project__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="project__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live-Demo</a>
            </div>
          </article>
          );
        })
       }
      </div>
    </section>
  )
}

export default Project
