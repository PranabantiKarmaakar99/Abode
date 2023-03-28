import React from 'react';
import "./Home.css";
import IMG1 from "./images_home/image1.jpeg";
import IMG2 from "./images_home/image2.jpeg";
import IMG3 from "./images_home/image3.jpeg";
import IMG4 from "./images_home/image4.jpeg";
import IMG5 from "./images_home/image5.jpeg";
import IMG6 from "./images_home/image6.jpeg";
import IMG7 from "./images_home/image7.jpeg";







import 'swiper/swiper-bundle.css';
import {  Pagination} from 'swiper';
import SwiperCore, { Autoplay,EffectFade } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";

import 'swiper/css/pagination';

const Home = () => {

  const IMAGE=[{
    image:IMG1,title:"Project1",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!"
  },
  {
    image:IMG2,title:"Project1",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!"
  }
,
{
  image:IMG3,title:"Project1",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!"
},
{
  image:IMG4,title:"Project1",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!"
},
{
  image:IMG5,title:"Project1",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!"
},
{
  image:IMG6,title:"Project1",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!"
},
{
  image:IMG7,title:"Project1",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!"
}





  ]



  function refreshPage() {
    window.location.reload(true);


  }

  SwiperCore.use([Autoplay])


  return (
    <section id="Home">
    


   


<Swiper className="container container_home"
modules={[ Pagination,Autoplay,EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect={"fade"}
      autoplay={{ delay: 5000 }}
      
      pagination={{ color:"grey" ,clickable: true }}>

    {IMAGE.map((el,index)=>(

     
   
       <SwiperSlide key={index} className="For_carousal">
      <img src={el.image} alt="" className="image_home" />
      <div className="content_home">
        <h2>{el.title} </h2>
        <h5> {el.content}</h5>
      </div>
      </SwiperSlide> 
      
  

     ))}

     </Swiper>
     
     <div className='Statistics'>
       
       <h2 className='section_title'>Why The Abode?</h2>

     <ul className ="Statistics_list" >
      <li className ="Statistics_items" > On-time Delivery </li>
      <li className ="Statistics_items"> Best Quality Assured </li>
      <li className ="Statistics_items"> Best in class Design</li>
      <li className ="Statistics_items"> 100 happy families</li>
     </ul>

     </div>
     

    
     
    </section>
  )
    }


export default Home;