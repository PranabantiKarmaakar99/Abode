import React from 'react';
import "./Shop.css";
import IMG1 from "./Shopimg/Shop1.jpeg";
import IMG2 from "./Shopimg/Shop2.jpeg";
import IMG3 from "./Shopimg/Shop3.jpeg";
import IMG4 from "./Shopimg/Shop4.jpeg";
import IMG5 from "./Shopimg/Shop5.jpeg";
import IMG6 from "./Shopimg/Shop6.jpeg";
import IMG7 from "./Shopimg/Shop7.jpeg";
import 'swiper/swiper-bundle.css';
import {  Pagination,} from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper styles
import 'swiper/css';
// import "swiper/css/navigation";

import 'swiper/css/pagination';


const Shop = () => {

const IMAGE=[{image:IMG1,title:"Product1",content:"Lorem ipsum dolor sit amet."},
{image:IMG2,title:"Product2",content:"Lorem ipsum dolor sit amet."},
{image:IMG3,title:"Product3",content:"Lorem ipsum dolor sit amet."},
{image:IMG4,title:"Product4",content:"Lorem ipsum dolor sit amet."},
{image:IMG5,title:"Product5",content:"Lorem ipsum dolor sit amet."},
{image:IMG6,title:"Product6",content:"Lorem ipsum dolor sit amet."},
{image:IMG7,title:"Product7",content:"Lorem ipsum dolor sit amet."}]


  return (
    <section id="shop">
    <div className="container container_shop">
    <div className="shop_background">
      <div className="shop_title">
        <h2 className="shop_title_text">
        Shop the ideas.
        </h2>
      </div>
      <Swiper className="shop_items"
modules={[ Pagination,Autoplay]}
      spaceBetween={15}
      slidesPerView={3}
      // pagination={true}
     
      // navigation={true}
      autoplay={{ delay: 3000 }}
      
      pagination={{ clickable: true }}>
      
     
      {IMAGE.map((el,index)=>( 
        <SwiperSlide  key={index} className="shop_img">
        <img src={el.image} alt="" className="shop_img1" />
        <h2 className="shop_item_title">
          <a href="#" className='shop_item_title_anchortag'>{el.title}</a>
        </h2>
        <h5 className="shop_item_content">
          {el.content}
        </h5>
      </SwiperSlide>))}
     
    

      </Swiper>
    
    </div>


    </div>
    
    </section>
  )
}

export default Shop