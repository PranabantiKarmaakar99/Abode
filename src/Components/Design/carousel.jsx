import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";
import IMG2 from "../Design/image/image2.jpeg";
import { BsArrowRight } from "react-icons/bs";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      gap : 2 ,
    };

    
    return (
      <div className="container container_carousel">
        {/* <h2>Auto Play & Pause with buttons</h2> */}
        <Slider  className="slider" ref={slider => (this.slider = slider)} {...settings}>

        
         
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
          
          <div className="carousel_box">
            <h3>4</h3>
          </div>
          <div className="carousel_box">
            <h3>5</h3>
          </div>
          <div className="carousel_box">
            <h3>6</h3>
          </div>
          
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}