import React from 'react';
import "./Nav.css";
import { FaHome } from "react-icons/fa";
import { AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { useState } from 'react';


function Nav() {


    const [activeNav, setActivNav] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActivNav('#')} className={activeNav === "#" ? 'active' : ''}><FaHome /></a>
            <a href="#about" onClick={() => setActivNav('#about')} className={activeNav === "#about" ? 'active' : ''} ><AiOutlineUser /></a>
            <a href="#skill" onClick={() => setActivNav('#skill')} className={activeNav === "#skill" ? 'active' : ''}><GiSkills /></a>
            <a href="#project" onClick={() => setActivNav('#project')} className={activeNav === "#project" ? 'active' : ''}><GrProjects /></a>
            <a href="#contacte" onClick={() => setActivNav('#contacte')} className={activeNav === "#contact" ? 'active' : ''}><AiOutlineMessage /></a>

        </nav>
    )
}

export default Nav
