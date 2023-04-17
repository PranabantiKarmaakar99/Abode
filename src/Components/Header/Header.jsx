import React,{ useState } from 'react';
import "./Header.css";

import Navbar from './Navbar';


import {Link} from "react-router-dom";




const Header = () => {
    
 
      
     

  return (
   <header>

  
   
  <div className="company_name1">

   <div className="The">The</div> <div className="Abode" > ABODE </div>

   </div>
   {/* <div className="tagline2">boutique home and beyond</div> */}

  
   
<nav>
  <Navbar />


      </nav>
      </header>
     
     

  
  )
}

export default Header;




