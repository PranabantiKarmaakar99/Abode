import React from 'react';
import Header from "./Components/Header/Header";

import Home2 from "./Components/Home/Home2";

// import Design from "./Components/Design/Design";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonial/Testimonial";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Drawercomp2 from './Components/Header/Drawercomp2/Drawercomp2';
import Carousel from "./Components/Design/carousel2";
import PopUP from './Components/Header/Pop-up/Pop-up1';



const App = () => {
  return (
    <div>
    
    <Header /> 
    
   
    <Home2 />
    <PopUP/>
    {/* <Design /> */}
    <Carousel />
   
    <Testimonials />
    <Shop />
    <About />
    <Footer />


    </div>
  )
}

export default App
