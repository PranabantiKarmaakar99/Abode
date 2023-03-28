import React from "react";
import Navlinks from "./Navlinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Drawercomp2 from "./Drawercomp2/Drawercomp2";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu className="Hamburger" onClick={() =>
     setOpen(!open)} />
  );

  const closeIcon = (
    <AiOutlineClose className="Close" onClick={() => 
    setOpen(!open)} />
  );

  return <nav className="MobileNavigation">
  {open ? closeIcon : hamburgerIcon} 
  {open && <Drawercomp2 />} 
  </nav>;
};

export default MobileNavigation;

// style={{display: "none"}}
