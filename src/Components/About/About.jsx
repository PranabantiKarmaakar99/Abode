import React from 'react';
import "./About.css";
import IMG1 from "./team1.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container container_about">
        <img  className="image_about" src={IMG1} alt="" />
        <div className="content_about">
          <a>Meet Our Team</a>
        </div>
      </div>
    </section>
  )
}

export default About;