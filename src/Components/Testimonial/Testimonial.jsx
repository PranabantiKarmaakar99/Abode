import React from "react";
import "./Testimonial.css";
import IMG1 from "./testimonial/testimonial1.png";
import IMG2 from "./testimonial/testimonial2.png";
import IMG3 from "./testimonial/testimonial3.png";
import IMG4 from "./testimonial/testimonial4.png";
import IMG5 from "./testimonial/testimonial5.png";
import IMG6 from "./testimonial/testimonial6.png";
import IMG7 from "./testimonial/testimonial7.png";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper";
import SwiperCore, { Autoplay, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

//import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const Testimonial = () => {
  const IMAGE = [
    { image: IMG1, title: "Mr. Anindya Dey", content: "The team at the ABODE were extremely professional and attentive to our needs and preferences. They took the time to listen to my ideas and provide suggestions that would enhance the overall look and feel of my home. They also provided me with detailed 3D renderings of the design, which helped me to visualize the final outcome.." },
    { image: IMG2, title: "Ms Riteema Roy and Family", content: "The execution of the project was flawless. The team worked tirelessly to ensure that every detail was perfect, from the color schemes and furniture selection to the lighting and decor. They were also very respectful of my time and completed the project within the agreed timeline." },
    { image: IMG3, title: "Abhisekh and Priyanka", content: "We are absolutely thrilled with the end result. The interior of my flat is stunning, and I receive compliments on it from everyone who visits. I would highly recommend this interior designing company to anyone looking for a professional and reliable team to design and execute their home interiors. Thank you for making my dream home a reality!" },
    { image: IMG4, title: "The RoyChowdhury's", content: "We recently had the pleasure of working with The ABODE in Kolkata to design and execute the interior of my 3BHK flat. I can honestly say that the experience was exceptional from start to finish." },
    { image: IMG5, title: " Ms. Ananya Boral", content: "The team was incredibly talented and dedicated, and they truly went above and beyond to ensure that every detail was perfect. From the furniture and decor to the lighting and color schemes, they thought of everything and created a space that is both beautiful and functional. I would highly recommend this company to anyone looking for exceptional interior design services." },
    { image: IMG6, title: "Mr Abhinandan Kar", content: "The finished product is absolutely stunning, and we would highly recommend this company to anyone looking for top-notch interior design services." },
    { image: IMG7, title: "Mr Anubhav Mishra", content: "From the furniture and decor to the lighting and color schemes, they thought of everything and created a space that is both beautiful and functional." },
  ];

  return (
    <section id="testimonial">
      <Swiper
        className="container container_testimonial"
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        effect={"fade"}
        autoplay={{ delay: 6000 }}
        pagination={{ color: "grey", clickable: true }}
      >
        {IMAGE.map((el, index) => (
          <SwiperSlide key={index}>
            <div className="section-wrapper">
              {/* <div className="image-wrapper"> */}
              <img src={el.image} alt="" className="testimonial_image" />
              {/* </div> */}
              <div>
                <div className="testimonial_text">
                  <h2 className="testimonial_title">{el.title}</h2>
                  <h5 className="testimonial_content">
                    <div className="big_quotes1">“ </div>
                    {el.content}
                    <div className="big_quotes2">”</div>
                  </h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
