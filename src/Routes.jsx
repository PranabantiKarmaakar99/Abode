import { Routes,Route} from "react-router";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import App from "./App";
import Home from "./Components/Home/Home2";
import Testimonials from "./Components/Testimonial/Testimonial";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Design/carousel2";
import LivingRoom from "./Components/Sub-Sections/Design Inspirations/Living/LivingRoom";
import Kitchen from  "./Components/Sub-Sections/Design Inspirations/Kitchen/KitchenGallery";
import Kitchen2 from  "./Components/Sub-Sections/Design Inspirations/Kitchen2/KitchenGallery2";


const Routes1 = () => {
    return (
     
           <Routes>
         
      
         <Route  exact path="/" element={<App />}/>
         {/* <Route  exact path="Design" element={<Lifestyle />}/> */}
         <Route exact  path="LivingRoom" element={<LivingRoom />} />
         <Route  exact path="Kitchen" element={<Kitchen />}/>
         <Route  exact path="Kitchen2" element={<Kitchen2 />}/>
         <Route  exact path="About" element={<About />}/>
         <Route  exact path="Footer" element={<Footer />}/>
  
         /* routes for introduction/vlog */
  
          {/* <Route  exact path = "Vlog1" element = {<Vlog1 />}/>
         <Route  exact path = "Vlog2" element = {<Vlog2 />}/>
         <Route  exact path = "Vlog3" element = {<Vlog3 />}/>
         <Route  exact path = "Vlog4" element = {<Vlog4 />}/>
         <Route  exact path = "Vlog5" element = {<Vlog5 />}/>
         <Route  exact path = "Vlog6" element = {<Vlog6 />}/> */}
  
         /* routes for Design Inspirations */
  
         {/* <Route  exact path = "DIVlog1" element = {<DIVlog1 />}/>
         <Route  exact path = "DIVlog2" element = {<DIVlog2 />}/>
         <Route  exact path = "DIVlog3" element = {<DIVlog3 />}/> */} 
       
  
  
  
         
     
         </Routes>
    )
  }
  
  export default Routes1;