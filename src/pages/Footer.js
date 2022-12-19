import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (

<nav class="bg-black border-gray-200 px-2 sm:px-4 py-2.5 text-white dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  
    
    <a  class="flex items-center">
    <section id="Contact"><h1>Get In Touch: <a href = "mailto: Ndubuisi.Azi@gmail.com">Nubuisi.Azi@gmail.com</a></h1></section>
    </a>
    <a href='https://github.com/ndubuisiazi' class="flex items-center">
    Github
    </a>
    <a href='https://www.linkedin.com/in/ndubuisi-azi-52454359/'  class="flex items-center">
    <Link to="/Experience" ><span className='header_optionLionThree'>Linked In </span></Link>
    </a>
    
  </div>
</nav>

  );
};

export default Footer;