import React,{ useState } from 'react';
import "./Header.css";

import Navbar from './Navbar';


import {Link} from "react-router-dom";




const Header = () => {
    
 
      
     

  return (
   <header>
   
  
   <h1 className='company_name'>ABODE</h1>
   
<nav>
  <Navbar />


      </nav>
      </header>
     
     

  
  )
}

export default Header;




