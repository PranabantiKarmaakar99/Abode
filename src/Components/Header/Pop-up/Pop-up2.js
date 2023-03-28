import React,{useState} from 'react';
import "./Pop-up2.css";
import { AiOutlineClose } from "react-icons/ai";

 const PopUp2 = () => {

  const [activeNav,setActiveNav]= useState("#");

  return (
   <section id="popUp2">
    <div className='popUp21'>

    HI 
    <AiOutlineClose className='close'/>
    <form className='submitbutton'>

    <div>
        <label for="name"> name</label>
        <input type="text" id="name" name="name" />
    </div>

    <div>
       
    <input  onClick={()=>setActiveNav("#about")}  className={activeNav === "#about" ? "active" : " "} id='Submit' value="submit" type="submit"/> 

    </div>
    
    </form>
    </div>
   </section> 

   

    
  )
}

export default PopUp2;