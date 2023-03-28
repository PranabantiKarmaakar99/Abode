import React,{useState} from 'react';
import "./Pop-up1.css";
import { AiOutlineClose } from "react-icons/ai";

 const PopUp1 = () => {

  const [activeNav,setActiveNav]= useState("#");
  const [isOpen, setIsOpen] = useState(false);

  return (
   <section id="popUp1">
    <div className='popUp11'>

    HI 
    <AiOutlineClose className='close' onClick={() => setIsOpen(false)}/>
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

export default PopUp1;