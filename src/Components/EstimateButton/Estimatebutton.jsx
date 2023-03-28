import React,{useState} from 'react'
import PopUp1 from '../Header/Pop-up/Pop-up1';
import "./EstimateButton.css";
import { AiOutlineClose } from "react-icons/ai";

const Estimatebutton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeNav,setActiveNav]= useState("#");


  return (
    <div className='Estimate_button_area'>
<button id="Estimate_button" onClick={() => setIsOpen(!isOpen)}>
        Get a free Estimate
      </button>
    {isOpen && (
        <div className='center-result'>
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
   </div>
)}

</div>) }




export default Estimatebutton;