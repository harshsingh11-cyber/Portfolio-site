import React from 'react';
import About from './Component/About/About';
import Contacte from './Component/Contacte/Contacte';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Nav from './Component/Nav/Nav';
import Project from './Component/Projects/Project';
import Skill from './Component/Skills/Skill';

function App() {
  return (
    <div className="App">
   <Header />
   <Nav/>
   <About/>
   <Skill/>
   <Project/>
   <Contacte/>
   <Footer/>
    </div>
  );
}

export default App;
