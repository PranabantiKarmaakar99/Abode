import React from "react";
import "./Footer.css";
import EastIcon from "@mui/icons-material/East";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section id="footer">
      <div className="container container_footer">
        <div className="footer_name">
          <h2 className="company_name_footer">ABODE </h2>


          <div className="Email">
          <div className="email_title"> Join Our Emailing List </div>
          <input type="text" />

          <a href="#">
            {" "}
            SUBMIT <EastIcon sx={{ fontSize: 30, marginLeft: 1 }} />
          </a>
        </div>
        </div>

        <hr className="line_separator" />

        <div className="row footer_content">
          <article className="col-2">
            <ul className="listUnstyled1">
              <li className="section_title_footer"> THE STUDIO</li>
              <li>
                <a href="#">The Studio</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </article>
          <article className="col-2">
            <ul className="listUnstyled1">
              <li className="section_title_footer">ARTICLES</li>
              <li>
                <a href="">Design Tips</a>
              </li>
              <li>
                <a href="">Home renovation</a>
              </li>
              <li>
                <a href="">Corner Beauty</a>
              </li>
            </ul>
          </article>
          <article className="col-2">
            <ul className="listUnstyled1">
              <li className="section_title_footer">QUICKLINKS</li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Legal Terms</a>
              </li>
            </ul>
          </article>

          <article className="col-2">
            <ul className="listUnstyled1">
              <li className="section_title_footer">
                ABODE & DECOR | <a>Shop now</a>{" "}
              </li>
              <div className="footer_socials">
                <li>
                  <a href="https://linkedin.com" target="_blank">
                    {" "}
                    <AiOutlineLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://facebbok.com" target="_blank">
                    <AiFillFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank">
                    <AiOutlineInstagram />
                  </a>
                </li>
              </div>

              <h5 className="made_by"></h5>
            </ul>
          </article>
        </div>

        <div className="copyright_text">Copyright ⓒ {year}| Made by PK</div>
      </div>
    </section>
  );
};

export default Footer;
