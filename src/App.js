import React from 'react';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home2";
import Testimonials from "./Components/Testimonial/Testimonial";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Design/carousel2";



const App = () => {
  return (
    <div>
    
    <Header /> 
    
   
    <Home />
    <Carousel />
    <Testimonials />
    {/* <Shop /> */}
    <About />
    <Footer />


    </div>
  )
}

export default App
