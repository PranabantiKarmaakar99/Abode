import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import IMG2 from "./image/image2.png";
import IMG3 from "./image/image3.png";
import IMG1 from "./image/image1.png";
import IMG4 from "./image/image4.png";
import IMG5 from "./image/image5.png";
import IMG6 from "./image/image6.png";
import IMG7 from "./image/image7.png";
import IMG8 from "./image/image8.png";
import IMG9 from "./image/image9.png";
import { BsArrowRight } from "react-icons/bs";
import Item from "./Item";
import "./Design2.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
        <h2 className="section_design_title">Inspirations</h2>

        {/* <h5 className="section_design_content">Lorem ipsum dolor sit amet.</h5> */}
      </div>
      <div className="App">
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={5000}>
         
         <Item> 
          <div className="design-items">
          <img src={IMG1} className="design_image" alt="" />
          <div className="design_title">
            <h2> Resilient Kitchen Designs </h2>
            <div className="design_content">
              {/* <h5>Look at the various options provided by The ABODE.</h5> */}
              <Link to="/Kitchen" className="design_content_text">
                Read More
                <BsArrowRight className="design_content_icon" />
              </Link>
            </div>
            </div>
            </div> 

        </Item>
          <Item> 
          <div className="design-items">
          <img src={IMG2} className="design_image" alt="" />
          <div className="design_title">
            <h2>The Quiet Study Area</h2>
            <div className="design_content">
              {/* <h5>Lorem ipsum dolor sit amet.</h5> */}
              <Link to="/Kitchen" className="design_content_text">
                Read More
                <BsArrowRight className="design_content_icon" />
              </Link>
            </div>
            </div>
            </div> 

        </Item>
          <Item><div className="design-items">
          <img src={IMG3} className="design_image" alt="" />
          <div className="design_title">
            <h2> Warm Living Areas </h2>
            <div className="design_content">
              {/* <h5>Lorem ipsum dolor sit amet.</h5> */}
              <Link to="/Kitchen2" className="design_content_text">
                Read More
                <BsArrowRight className="design_content_icon" />
              </Link>
            </div>
            </div>
            </div></Item>
          <Item><div className="design-items">
          <img src={IMG4} className="design_image" alt="" />
          <div className="design_title">
            <h2>Inner Sanctums</h2>
            <div className="design_content">
              {/* <h5>Lorem ipsum dolor sit amet.</h5> */}
              <a href="" className="design_content_text">
                Read More
                <BsArrowRight className="design_content_icon" />
              </a>
            </div>
            </div>
            </div></Item>
          <Item><div className="design-items">
          <img src={IMG5} className="design_image" alt="" />
          <div className="design_title">
            <h2>Private Spaces</h2>
            <div className="design_content">
              {/* <h5>Lorem ipsum dolor sit amet.</h5> */}
              <a href="" className="design_content_text">
                Read More
                <BsArrowRight className="design_content_icon" />
              </a>
            </div>
            </div>
            </div></Item>
          <Item><div className="design-items">
          <img src={IMG6} className="design_image" alt="" />
          <div className="design_title">
            <h2>Formal Livings</h2>
            <div className="design_content">
              {/* <h5>Lorem ipsum dolor sit amet.</h5> */}
              <a href="" className="design_content_text">
                Read More
                <BsArrowRight className="design_content_icon" />
              </a>
            </div>
            </div>
            </div></Item>
          <Item><div className="design-items">
          <img src={IMG7} className="design_image" alt="" />
          <div className="design_title">
            <h2>Youngster's quarters</h2>
            <div className="design_content">
              {/* <h5>Lorem ipsum dolor sit amet.</h5> */}
              <a href="" className="design_content_text">
                Read More
                <BsArrowRight className="design_content_icon" />
              </a>
            </div>
            </div>
            </div></Item>
          <Item><div className="design-items">
          <img src={IMG8} className="design_image" alt="" />
          <div className="design_title">
            <h2>Lounge Areas</h2>
            <div className="design_content">
              {/* <h5>Lorem ipsum dolor sit amet.</h5> */}
              <a href="" className="design_content_text">
                Read More
                <BsArrowRight className="design_content_icon" />
              </a>
            </div>
            </div>
            </div></Item>
          <Item><div className="design-items">
          <img src={IMG9} className="design_image" alt="" />
          <div className="design_title">
            <h2>Opulent Living</h2>
            <div className="design_content">
              {/* <h5>Lorem ipsum dolor sit amet.</h5> */}
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

