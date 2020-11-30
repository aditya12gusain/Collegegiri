import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>College Starters Pack</HeroH1>
          <HeroP>A Two Day Session for College Freshers</HeroP>
          <HeroBtn target="_blank" href="https://forms.gle/j2Uk9YtcBUXxHa8w9">
            Register Now
          </HeroBtn>
          <br />
          <h2>For Free</h2>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
