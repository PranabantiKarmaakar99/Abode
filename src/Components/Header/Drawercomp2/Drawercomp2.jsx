import React,{useState} from 'react';
import "./Drawercomp2.css";

const Drawercomp2 = () => {


  const [activeNav,setActiveNav]= useState("#");
  return (


    <div className='Drawercomp'>
    <a href="#" onClick={()=>setActiveNav("#")}  className={activeNav === "#" ? "active" : " "}>Home</a>
    <a id="anchor" href='#design' onClick={()=>setActiveNav("#design")}  className={activeNav === "#design" ? "active" : " "}>Design</a>
   
   <a id="anchor" href='#testimonial' onClick={()=>setActiveNav("#testimonial")}  className={activeNav === "#testimonial" ? "active" : " "} >Testimonial</a>
    <a id="anchor" href='#shop' onClick={()=>setActiveNav("#shop")}  className={activeNav === "#shop" ? "active" : " "} >Shop</a>
   <a id="anchor" href='#about' onClick={()=>setActiveNav("#about")}  className={activeNav === "#about" ? "active" : " "} >About</a>
   <a id="Estimate_button" href='#about' onClick={()=>setActiveNav("#about")}  className={activeNav === "#about" ? "active" : " "} >Get a free Estimate</a>
    
    
    </div>
  )
}

export default Drawercomp2;