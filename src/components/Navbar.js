// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px' }}>
      <Link to="/">
        <img src='images/code1.png' alt="Home" className='nav-style' />
      </Link>
      <Link to="/lightgloves">
        <img src='images/code2.png' alt="About" className='nav-style' />
      </Link>
      <Link to="/Tree">
        <img src='images/code3.png' alt="Contact" className='nav-style' />
      </Link>
    </nav>
  );
};

export default Navbar;
