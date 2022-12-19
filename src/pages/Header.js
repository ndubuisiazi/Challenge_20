import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (

<nav class="bg-black border-gray-200 px-2 sm:px-4 py-2.5 text-white dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a  class="flex items-center">
    Ndubuisi Azi
    </a>
    <a  class="flex items-center">
    <Link to="/Home" ><span className='header_optionLionThree'>Home</span></Link>
    </a>
    <a  class="flex items-center">
    <Link to="/Applications" ><span className='header_optionLionThree'>Portfolio </span></Link>
    </a>
    <a  class="flex items-center">
    <Link to="/Aboutme" ><span className='header_optionLionThree'>About Me </span></Link>
    </a>
    <a  class="flex items-center">
    <Link to="/Experience" ><span className='header_optionLionThree'>Resume </span></Link>
    </a>
    
  </div>
</nav>

  );
};

export default Header;