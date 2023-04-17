import React from "react";
import Carousel from "react-elastic-carousel";

import "./Home.css";
import IMG1 from "./images_home/image1.png";
import IMG2 from "./images_home/image2.png";
import IMG3 from "./images_home/image3.png";
import IMG4 from "./images_home/image4.png";
import IMG5 from "./images_home/image5.png";
import IMG6 from "./images_home/image10.png";
import IMG7 from "./images_home/image7.png";
import IMG8 from "./images_home/image8.png";
import IMG9 from "./images_home/image9.png";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import {Link} from "react-router-dom";
import { BsClockHistory } from "react-icons/bs";
import { GiRibbonMedal } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";








import "swiper/swiper-bundle.css";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

//import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "swiper/css/pagination";
import { Button } from "@mui/material";





const Home = () => {

  const [activeNav,setActiveNav]= useState("#");
  const IMAGE = [
    {
      image: IMG1,
      title: "Ms Boral's Residence",
      content:
        "A style that blends elements of bohemian and eclectic design with a touch of vintage and rustic charm! ",
    },
    {
      image: IMG2,
      title: "Abhisekh & Priyanka's Residence",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!",
    },
    {
      image: IMG3,
      title: "The RoyChowdhury House",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!",
    },
    {
      image: IMG4,
      title: "The Mishra's Residence",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!",
    },
    {
      image: IMG5,
      title: "Roy Residence",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!",
    },
    {
      image: IMG6,
      title: "Kar House",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!",
    },
    {
      image: IMG7,
      title: "The Ghosh Residence ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!",
    },
    {
      image: IMG8,
      title: "Project1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!",
    },
    {
      image: IMG9,
      title: "Project1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae!",
    },
  ];

  function refreshPage() {
    window.location.reload(true);
  }

 

  SwiperCore.use([Autoplay]);

  return (
    <section id="Home">




     <Swiper
        className="container container_home"
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        effect={"fade"}
        autoplay={{ delay: 5000 }}
        pagination={{ color: "grey", clickable: true }}
      >
        {IMAGE.map((el, index) => (
          <SwiperSlide key={index} className="For_carousal">
            <a href="#testimonial"><img src={el.image} alt="" className="image_home" /></a>
            <div className="content_home">
              <h2 className="content_home_title">{el.title} </h2>
              <div id="content_home_text1">
              <h5 className="content_home_text">
              
                {el.content}
              </h5>

              
              
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> 

      <a href="#design" className="Experiment_tag"> Read More </a>

      <div className="Statistics">
        <h2 className="section_title">Why The Abode?</h2>
        {/* <a href="#testimonial" className="testingout">why is this happening</a> */}

        <ul className="Statistics_list">
          <li className="Statistics_items"> <BsClockHistory className="icon3"/>On-time Delivery </li>
          <li className="Statistics_items"> <GiRibbonMedal className="icon3"/>Best Quality Assured </li>
          <li className="Statistics_items"><FaMedal className="icon3"/> Best in class Design</li>
          <li className="Statistics_items"> <IoIosPeople className="icon3" />100 happy families</li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
