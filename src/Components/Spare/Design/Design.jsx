import React from "react";
import "./Design.css";
import IMG1 from "./image/image1.jpeg";
import IMG2 from "./image/image2.jpeg";
import { BsArrowRight } from "react-icons/bs";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

//import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const Design = () => {
  return (
    <section id="design">
      <div className="title_design_block">
        <h2 className="section_design_title">Design Inspiration</h2>

        <h5 className="section_design_content">Lorem ipsum dolor sit amet.</h5>
      </div>

      <div className="container container_design">
        <article className="design-items">
          <img src={IMG2} className="design_image" alt="" />

          <div className="design_title">
            <h2>Design Idea 2</h2>
            <div className="design_content">
              <h5>Lorem ipsum dolor sit amet.</h5>
              <a href="" className="design_content_text">
                Read More
                <BsArrowRight className="design_content_icon" />
              </a>
            </div>
          </div>
        </article>
        <article  className="design-items">
          <img src={IMG2} className="design_image" alt="" />

          <div className="design_title">
            <h2>Design Idea 2</h2>
            <div className="design_content">
              <h5>Lorem ipsum dolor sit amet.</h5>
              <a href="" className="design_content_text">
                Read More
                <BsArrowRight className="design_content_icon" />
              </a>
            </div>
          </div>
        </article>{" "}
        <article  className="design-items">
          <img src={IMG2} className="design_image" alt="" />

          <div className="design_title">
            <h2>Design Idea 2</h2>
            <div className="design_content">
              <h5>Lorem ipsum dolor sit amet.</h5>
              <a href="" className="design_content_text">
                Read More
                <BsArrowRight className="design_content_icon" />
              </a>
            </div>
          </div>
        </article>
      </div>

     
    </section>
  );
};

export default Design;
