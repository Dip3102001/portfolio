import React from 'react';
import {Link} from 'react-scroll';

const Navbar:React.FC = () => {
  return (
    <div className="navbar z-50 rounded-full border-2 border-base-300 bg-base-100 shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl mx-auto">
  <div className="flex-1">
  </div>
  
  {/* Desktop menu - right aligned */}
  <div className="hidden md:flex flex-none">
    <ul className="menu menu-horizontal px-1">
      <Link to="home" smooth={true} duration={500}>
        <li><a>Home</a></li>
      </Link>
      
      <Link to="about" smooth={true} duration={500}>
        <li><a>About</a></li>
      </Link>

      <Link to="experience" smooth={true} duration={500}>
        <li><a>Experience</a></li>
      </Link>

      <Link to="skills" smooth={true} duration={500}>
        <li><a>Skills</a></li>
      </Link>

      <Link to="projects" smooth={true} duration={500}>
        <li><a>Projects</a></li>
      </Link>
    </ul>
  </div>
  
  {/* Mobile menu (hamburger) - right aligned */}
  <div className="flex-none md:hidden">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <Link to="home" smooth={true} duration={500}>
          <li><a>Home</a></li>
        </Link>

        <Link to="about" smooth={true} duration={500}>
          <li><a>About</a></li>
        </Link>

        <Link to="experience" smooth={true} duration={500}>
          <li><a>Experience</a></li>
        </Link>

        <Link to="skills" smooth={true} duration={500}>
          <li><a>Skills</a></li>
        </Link>

        <Link to="projects" smooth={true} duration={500}>
          <li><a>Projects</a></li>
        </Link>
      </ul>
    </div>
  </div>
</div>
);
};

export default Navbar;