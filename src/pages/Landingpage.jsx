import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Service from "../components/Services";
import Course from "../components/Courses";
import About from "../components/About";
import Footer from "../components/Footer";
import Features from "../components/Feature";
import Plan from "../components/Plans";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Plan />
      <Service />
      <Course />
      <Footer />
    </div>
  );
};

export default Landingpage;
