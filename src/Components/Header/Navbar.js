import React from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import "./Header.css";
// import "./Header2.css";





const Navbar = () => {
  return (
    <nav className='Navbar'> 

    <MobileNavigation />
    <Navigation/>
    
    </nav>
  )
}

export default Navbar;