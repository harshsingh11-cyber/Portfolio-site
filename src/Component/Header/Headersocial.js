import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";

function Headersocial() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/harsh-singh-chouhan-40aa7a1ab" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/harshsingh11-cyber" target="_blank"><BsGithub/></a>
        <a href="https://www.hackerrank.com/hchouhan689" target="_blank"><SiHackerrank/></a>
    </div>
  )
}

export default Headersocial
