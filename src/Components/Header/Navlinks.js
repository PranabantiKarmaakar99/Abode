import { React, useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Drawercomp from "./Drawercomp";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { ClassNames } from "@emotion/react";
import PopUp1 from "./Pop-up/Pop-up1";
import Estimatebutton from "../EstimateButton/Estimatebutton";

const Navlinks = () => {
  const [activeNav, setActiveNav] = useState("#");
 

  return (
    <nav className="nav">
      <ul className="Navbar-items">
        <li>
          <a
            id="anchor"
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : " "}
          >
            Home
          </a>
        </li>
        <li>
          <a
            id="anchor"
            href="#design"
            onClick={() => setActiveNav("#design")}
            className={activeNav === "#design" ? "active" : " "}
          >
            Design
          </a>
        </li>

        <li>
          <a
            id="anchor"
            href="#testimonial"
            onClick={() => setActiveNav("#testimonial")}
            className={activeNav === "#testimonial" ? "active" : " "}
          >
            Testimonial
          </a>
        </li>
        <li>
          {" "}
          <a
            id="anchor"
            href="#shop"
            onClick={() => setActiveNav("#shop")}
            className={activeNav === "#shop" ? "active" : " "}
          >
            Shop
          </a>
        </li>
        <li>
          <a
            id="anchor"
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : " "}
          >
            About
          </a>
        </li>
      </ul>
      {/* <a id="Estimate_button" href="#popUp" onClick={() => setIsOpen(!isOpen)}>
        Get a free Estimate
      </a> */}
      <Estimatebutton />
    
    </nav>
  );
};

export default Navlinks;
