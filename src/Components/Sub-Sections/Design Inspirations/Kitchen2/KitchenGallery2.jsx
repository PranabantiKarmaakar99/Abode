import React from "react";
import "./Kitchen2.css";

import { BsArrowRight } from "react-icons/bs";
import { BrowserRouter, Route, Link } from "react-router-dom";
import IMG1 from "./ref images/Acrylic kitchen/1.png";
import IMG2 from "./ref images/Acrylic kitchen/2.png";
import IMG3 from "./ref images/Rustic and Natural kitchen/3.png";
import IMG4 from "./ref images/Rustic and Natural kitchen/4.png";
import IMG5 from "./ref images/Rustic and Natural kitchen/5.png";
import IMG6 from "./ref images/Rustic and Natural kitchen/6.png";
import IMG7 from "./ref images/Rustic and Natural kitchen/7.png";
import IMG8 from "./ref images/Rustic and Natural kitchen/8.png";
import Header from "../../../Header/Header"; 

const KitchenGallery = () => {
  const IMAGEGAL = [
    { img: IMG1, title: "Acrylic Kitchen", content: "" },
    { img: IMG2, title: "High-Gloss Kitchen", content: "" },
    { img: IMG3, title: "Rustic Kitchen", content: "" },
    { img: IMG4, title: "Rustic Kitchen", content: "" },
    { img: IMG5, title: "Rustic Kitchen", content: "" },
    { img: IMG6, title: "Rustic Kitchen", content: "" },
    { img: IMG7, title: "Rustic Kitchen", content: "" },
    { img: IMG8, title: "Rustic Kitchen", content: "" },
  ];
  return (
    <div>
    <Header />
      <div className="item-wrapper">
        {IMAGEGAL.map((el, index) => (
          <div className="design-items2">
            <img src={el.img} className="design_image2" alt="" />
            <div className="design_title2">
              <h2>{el.title} </h2>
              <div className="design_content2">
                <h5>{el.content}</h5>
                <Link to="/LivingRoom" className="design_content_text2">
                  Read More
                  <BsArrowRight className="design_content_icon2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KitchenGallery;
