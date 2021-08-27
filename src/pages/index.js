import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import { homeObjOne, homeObjTwo } from "../components/AboutSection/Data";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection {...homeObjOne} />
      <AboutSection {...homeObjTwo} />
      <Services/>
      <Footer/>
    </>
  );
};

export default Home;
