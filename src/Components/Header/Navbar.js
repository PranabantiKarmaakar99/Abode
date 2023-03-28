import React from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import "./Header.css";
import Drawercomp2 from './Drawercomp2/Drawercomp2';



const Navbar = () => {
  return (
    <nav className='Navbar'> 

    <MobileNavigation />
    <Navigation/>
    
    </nav>
  )
}

export default Navbar;