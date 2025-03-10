import React from 'react';

const Navbar:React.FC = () => {
  return (
    <div className="navbar z-50 rounded-full border-2 border-base-300 bg-base-100 shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl mx-auto">
    <div className="flex-1">
        My Portfolio
    </div>
    <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Experience</a></li>
        <li><a>Skills</a></li>
        <li><a>Projects</a></li>
    </ul>
    </div>
    </div>
  );
};

export default Navbar;