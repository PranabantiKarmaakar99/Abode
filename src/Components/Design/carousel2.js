import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import IMG2 from "./image/image2.jpeg";
import { BsArrowRight } from "react-icons/bs";
import Item from "./Item";
import "./Design2.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 660, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];

function carousel2() {
  return (
    <>
     <section id="design">
     <div className="title_design_block">
        <h2 className="section_design_title">Design Inspiration</h2>

        <h5 className="section_design_content">Lorem ipsum dolor sit amet.</h5>
      </div>
      <div className="App">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000}>
         
         <Item> 
          <div className="design-items">
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
            </div> 

        </Item>
          <Item> 
          <div className="design-items">
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
            </div> 

        </Item>
          <Item><div className="design-items">
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
            </div></Item>
          <Item><div className="design-items">
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
            </div></Item>
          <Item><div className="design-items">
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
            </div></Item>
          <Item><div className="design-items">
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
            </div></Item>
          <Item><div className="design-items">
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
            </div></Item>
          <Item><div className="design-items">
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
            </div></Item>
          <Item><div className="design-items">
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
            </div></Item>
        </Carousel>
      </div>

      </section>
    </>
  );
}


export default carousel2;

