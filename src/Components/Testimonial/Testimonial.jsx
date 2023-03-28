import React from 'react';
import "./Testimonial.css";
import IMG1 from "./testimonial/testimonial1.jpeg";
import IMG2 from "./testimonial/testimonial2.jpeg";
import IMG3 from "./testimonial/testimonial3.jpeg";
import IMG4 from "./testimonial/testimonial4.jpeg";
import IMG5 from "./testimonial/testimonial5.jpeg";
import IMG6 from "./testimonial/testimonial6.jpeg";
import IMG7 from "./testimonial/testimonial7.jpeg";
import 'swiper/swiper-bundle.css';
import {  Pagination} from 'swiper';
import SwiperCore, { Autoplay,EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const Testimonial = () => {

  const IMAGE=[{image:IMG1,title:"Client1",content:"Lorem ipsum dolor sit amet."},
  {image:IMG2,title:"Client2",content:"Lorem ipsum dolor sit amet."},
  {image:IMG3,title:"Client3",content:"Lorem ipsum dolor sit amet."},
  {image:IMG4,title:"Client4",content:"Lorem ipsum dolor sit amet."},
  {image:IMG5,title:"Client5",content:"Lorem ipsum dolor sit amet."},
  {image:IMG6,title:"Client6",content:"Lorem ipsum dolor sit amet."},
  {image:IMG7,title:"Client7",content:"Lorem ipsum dolor sit amet."}]

  return (
    <section id="testimonial">
  
    <Swiper className="container container_testimonial"
modules={[ Pagination,Autoplay,EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect={"fade"}
      autoplay={{ delay: 6000 }}
      pagination={{ color:"grey" ,clickable: true }}>
{IMAGE.map((el,index)=>(<SwiperSlide key={index} >
    <img src={el.image} alt="" className='testimonial_image'/>
    <div>
    <div className="testimonial_text">
    <h2 className="testimonial_title">
      {el.title}
    </h2>
    <h5 className="testimonial_content">
     {el.content}
    </h5>
    </div>
    </div>
    </SwiperSlide>))}
    

    
    </Swiper>
    
    
    
  </section>
  )
}

export default Testimonial